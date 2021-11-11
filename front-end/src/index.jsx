import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD:front-end/src/index.jsx
import reportWebVitals from './reportWebVitals';
import './index.css';
=======
>>>>>>> eac774bdc289bd616421e0fe789d643db79b49fe:front-end/src/index.js
import App from './App';
import Provider from './context/Provider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD:front-end/src/index.jsx
      <App />
=======
    <Provider>
      <App />
    </Provider>
>>>>>>> eac774bdc289bd616421e0fe789d643db79b49fe:front-end/src/index.js
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
