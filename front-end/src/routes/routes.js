import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route, useLocation } from 'react-router';

import Form from '../components/Login/Form';

const Routes = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Switch>
      {location.pathname === '/'
        ? <Redirect to="/login" />
        : null}
      <Route path="/" component={ Form } />
    </Switch>
  );
};
export default Routes;
