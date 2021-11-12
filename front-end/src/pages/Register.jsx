import React from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';

function Register() {
  return (
    <div>
      <NameInput />
      <EmailInput />
      <PasswordInput />
    </div>
  );
}

export default Register;
