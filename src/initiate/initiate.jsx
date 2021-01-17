import React, { Suspense } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import settings from '../settings/settings';
import { dataReducers, settingsReducers, statisticsReducers, statisticsUpdatesReducers } from '../store/reducers';
import { ComponentMode, EnvironmentMode } from '../core/enums';
import { textUtils } from '../utils';

const { ENVIRONMENT_MODE, COMPONENT_MODE } = settings;
settings.ENVIRONMENT_MODE = process.env.NODE_ENV;
const isDevelopment = process.env.NODE_ENV === 'development' || ENVIRONMENT_MODE === EnvironmentMode.DEVELOPMENT;
let app = null;
if (COMPONENT_MODE === ComponentMode.APP) {
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
        <Suspense fallback={null}>
            <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))}>
                <BrowserRouter>
                    {component}
                </BrowserRouter>
            </Provider>
        </Suspense>
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