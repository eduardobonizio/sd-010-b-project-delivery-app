import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

// import { Redirect } from 'react-router';

import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ NavBar }>
          {/* <Redirect to="/login" /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
