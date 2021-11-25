import React from 'react';
import { Redirect } from 'react-router';
import Form from '../components/Login/Form';
import VisualIdentity from '../components/Login/VisualIdentity';

function Login() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return (
      <Redirect to="/customer/products" />
    );
  }

  return (
    <main>
      <VisualIdentity />
      <Form />
    </main>
  );
}

export default Login;
