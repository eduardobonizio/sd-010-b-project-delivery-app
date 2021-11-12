import React from 'react';
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import RegisterScreen from './components/RegisterScreen';

function App() {
  return (
    <Routes>
      <Route path="/register" element={ <RegisterScreen /> } />
      {/* <Route path="/" component={ Login } />
        <Route path="/login" component={ Login } /> */}
    </Routes>
=======
import './App.css';
import { Route, Routes } from 'react-router';
import Raiz from './pages/Raiz';
import Login from './pages/Login';
import Customer from './pages/Customer';
// import rockGlass from './images/rockGlass.svg';
// import Context from './context/Context';

function App() {
  // const { test } = useContext(Context);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Raiz /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/customer/products" element={ <Customer /> } />
      </Routes>
    </div>
>>>>>>> aba38e68a1c1db85482182aea4e182ae80d6ee44
  );
}

export default App;
