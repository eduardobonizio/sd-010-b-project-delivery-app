import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ContextProvider from './context/ContextProvider';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
<<<<<<< HEAD
    <App />
=======
      <App />
>>>>>>> aba38e68a1c1db85482182aea4e182ae80d6ee44
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
