import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route, useLocation } from 'react-router';

import Login from '../pages/Login';

const Routes = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Switch>
      {location.pathname === '/'
        ? <Redirect to="/login" />
        : null}
      <Route path="/" component={ Login } />
    </Switch>
  );
};

export default Routes;
