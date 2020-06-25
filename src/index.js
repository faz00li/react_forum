import 'bootstrap/dist/js/bootstrap';//possible extension
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'jquery';//npm install popper.js --save
global.jQuery = require('jquery');
require('bootstrap');
window.jQuery = window.$ = global.jQuery;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
