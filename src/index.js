import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import HomeDepartamentos from './components/HomeDepartamentos';
import MenuDepartamentos from './components/MenuDepartamentos';
import CreateDepartamentos from './components/CreateDepartamentos';
import Router from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
