import React from 'react';
import RegisterForm from '../components/RegisterForm';

import '../styles/loginPage.css';

function Register() {
  return (
    <section>
      <div>
        <main>
          <RegisterForm />
        </main>
        <span
          id="invalid-message"
          style={ { visibility: 'hidden' } }
          data-testid="common_register__element-invalid_register"
        >
          Usuário já cadastrado
        </span>
      </div>
    </section>
  );
}

export default Register;
