import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
// import Home from './Components/Home';

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={ Login } />
        <Route
          exact
          path="/"
          // element={ <Home /> }
          // render={ (props) => <Home { ...props } /> }
        >
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
