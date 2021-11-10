import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/provider';
import Login from './pages/Login';


function App() {
  return (
    <main>
      <Provider>
        <BrowserRouter>
        <Route path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
