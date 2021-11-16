import React from 'react';
import { Typography } from 'antd';

import FormRegister from '../components/Register/FormRegister';

function Register() {
  const { Title } = Typography;
  return (
    <main>
      <Title
        style={ { textAlign: 'center', margin: '50px 0 0 0' } }
      >
        Cadastro
      </Title>
      <FormRegister />
    </main>
  );
}

export default Register;
