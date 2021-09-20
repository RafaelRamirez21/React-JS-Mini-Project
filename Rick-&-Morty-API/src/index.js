import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import './assets/styles/global.scss'
import { ApiProvider } from './Context/ApiProvider'
ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById('app')
);