import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
// import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      {/* <Route exact path="/" element={ <Login /> } /> */}
    </Routes>
  );
}

export default App;
