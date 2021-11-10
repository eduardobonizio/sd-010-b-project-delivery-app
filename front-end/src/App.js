import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './contexts/createContext';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="*" render={ () => (<h1>NOT FOUND</h1>) } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
