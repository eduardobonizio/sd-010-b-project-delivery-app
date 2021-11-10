import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DeliveryProvider from './context/DeliveryProvider';


ReactDOM.render(
  <DeliveryProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DeliveryProvider>,
  document.getElementById('root'),
);
