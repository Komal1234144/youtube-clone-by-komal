import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./_base.scss";
import 'react-loading-skeleton/dist/skeleton.css'
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
   </BrowserRouter> 
   </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

