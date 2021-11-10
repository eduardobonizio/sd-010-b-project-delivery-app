import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../components/Login/Form';

const Routes = () => (
  <Switch>
    <Route path="/login" component={ Form } />
  </Switch>
);

export default Routes;
