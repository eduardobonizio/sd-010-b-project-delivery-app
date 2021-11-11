import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <LoginPage /> } />
      {/* <Route exact path="/" element={ <Login /> } /> */}
    </Routes>
  );
}

export default App;
