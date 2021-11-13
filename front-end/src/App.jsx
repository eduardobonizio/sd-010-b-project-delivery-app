import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
// import RegisterForm from './components/RegisterForm';
// import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      {/* <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <RegisterForm /> } />
      <Route exact path="/" navigate element={ <Home /> } /> */}
    </Switch>
  );
}

export default App;
