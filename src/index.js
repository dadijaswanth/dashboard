import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter basename="/demo/purple-react-free/template/demo_1/preview">
    <App />
  </HashRouter>
, document.getElementById('root'));

serviceWorker.unregister();