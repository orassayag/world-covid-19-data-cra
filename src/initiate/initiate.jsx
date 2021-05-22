import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import settings from '../settings/settings';
import store from '../store/store';
import { ComponentModeEnum } from '../core/enums';
import { timeUtils, textUtils } from '../utils';

const { COMPONENT_MODE } = settings;
settings.ENVIRONMENT_MODE = process.env.NODE_ENV;
let app = null;
if (COMPONENT_MODE === ComponentModeEnum.APP) {
    const mode = textUtils.getParameterByName('mode', window.location.href);
    const App = lazy(() => import('../pages/App/App'));
    const component = (<App mode={mode} />);
    app = (
        <HelmetProvider>
            <Suspense fallback={null}>
                <Provider store={store}>
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
    const Component = lazy(() => import(`../pages/${componentName}/${componentName}`));
    app = (
        <Suspense fallback={null}>
            <Component />
        </Suspense>
    );
}

export default app;