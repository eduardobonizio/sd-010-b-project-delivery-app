import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;
