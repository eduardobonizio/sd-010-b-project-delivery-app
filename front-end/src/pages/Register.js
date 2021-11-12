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
          style={ { visibility: 'hidden' } }
          data-testid="common_register__element-invalid_register"
        >
          [Elemento oculto (Mensagens de erro)]
        </span>
      </div>
    </section>
  );
}

export default Register;
