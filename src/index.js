import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import storeRedux from "./redux/StoreRedux"; // Make sure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storeRedux}>
    <App />
  </Provider>,
);