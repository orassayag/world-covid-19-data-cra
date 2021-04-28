import React, { Suspense } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import settings from '../settings/settings';
import { dataReducers, settingsReducers, statisticsReducers, statisticsUpdatesReducers } from '../store/reducers';
import { ComponentModeEnum, EnvironmentModeEnum } from '../core/enums';
import { timeUtils, textUtils } from '../utils';

const { ENVIRONMENT_MODE, COMPONENT_MODE } = settings;
settings.ENVIRONMENT_MODE = process.env.NODE_ENV;
const isDevelopment = process.env.NODE_ENV === 'development' || ENVIRONMENT_MODE === EnvironmentModeEnum.DEVELOPMENT;
let app = null;
if (COMPONENT_MODE === ComponentModeEnum.APP) {
    const mode = textUtils.getParameterByName('mode', window.location.href);
    const App = React.lazy(() => import('../containers/App/App'));
    const component = (<App mode={mode} />);
    const composeEnhancers = (isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
    const rootReducer = combineReducers({
        data: dataReducers.getDataReducer,
        settings: settingsReducers.getSettingsReducer,
        statistics: statisticsReducers.getStatisticsReducer,
        statisticsUpdates: statisticsUpdatesReducers.getStatisticsUpdatesReducer
    });
    app = (
        <HelmetProvider>
            <Suspense fallback={null}>
                <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))}>
                    <Helmet>
                        <title data-rh="true">World Covid 19 Data | Covid 19 World Data | {timeUtils.getTitleDate()}</title>
                    </Helmet>
                    <BrowserRouter>
                        {component}
                    </BrowserRouter>
                </Provider>
            </Suspense>
        </HelmetProvider>
    );
}
else {
    const componentName = textUtils.upperCaseFirstLetter(COMPONENT_MODE);
    const Component = React.lazy(() => import(`../containers/${componentName}/${componentName}`));
    app = (
        <Suspense fallback={null}>
            <Component />
        </Suspense>
    );
}

export default app;