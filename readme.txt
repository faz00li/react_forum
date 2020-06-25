			/////////////////////////////////
			REACT APP w/ BOOTSTRAP AND JQUERY
			/////////////////////////////////


create-react-app <name>
npm install popper.js --save
npm install bootstrap jquery --save

import 'bootstrap/dist/js/bootstrap';//possible extension
import 'bootstrap/dist/css/bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'jquery';
global.jQuery = require('jquery');
require('bootstrap');
window.jQuery = window.$ = global.jQuery;