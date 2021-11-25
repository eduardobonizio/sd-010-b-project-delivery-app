import React from 'react';
import '../styles/Register.css';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <div className="conteiner-login-register">
      <div className="App-register">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
