import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeliveryProvider from './context/DeliveryProvider';

ReactDOM.render(
  <DeliveryProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DeliveryProvider>,
  document.getElementById('root'),
);
