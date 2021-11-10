import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './contexts/createContext';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="*" element={ <h1>NOT FOUND</h1> } />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
