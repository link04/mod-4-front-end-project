import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';

ReactDOM.render(
  <BrowserRouter>
    <ActionCableProvider url={API_WS_ROOT}>
      <App />
    </ActionCableProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
