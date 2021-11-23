/* eslint-disable react/prop-types */
// https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
import React from 'react';
import Proptypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('user');
  return (
    <Route
      { ...rest }
      render={ (props) => (isLoggedIn ? (
        <Component { ...props } />
      ) : (
        <Redirect to={ { pathname: '/login', state: { from: props.location } } } />
      )) }
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: Proptypes.func.isRequired,
  location: Proptypes.shape({}),
};

PrivateRoute.defaultProps = {
  location: {},
};
