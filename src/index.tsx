import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import reduxStore from './redux';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={reduxStore}>
    <React.StrictMode>
      <BrowserRouter>

        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>

);
