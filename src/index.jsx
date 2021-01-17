import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import settings from './settings/settings';
import './assert/css/master.scss';
import { EnvironmentMode } from './core/enums';
import app from './initiate/initiate';
const { ENVIRONMENT_MODE } = settings;
const isDevelopment = process.env.NODE_ENV === 'development' || ENVIRONMENT_MODE === EnvironmentMode.DEVELOPMENT;
ReactDOM.render(app, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
isDevelopment ? serviceWorker.register() : serviceWorker.unregister();