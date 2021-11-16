import React, { useState } from 'react';
// import { Redirect } from 'react-router';
import axios from 'axios';

import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../Login/loginForm.css';
import Logincontext from '../../context/LoginContext';

function FormRegister() {
  const { setUserData } = React.useContext(Logincontext);
  const [form] = Form.useForm();
  const [, forceUpdate] = React.useState({});
  const [isError, setIsError] = useState(false);
  // const [redirect, setRedirect] = useState(false);

  React.useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    setUserData(values);
    const { email, password } = values;
    try {
      await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      // console.log(respLogin);
      setRedirect(true);
    } catch (error) {
      setIsError(true);
    }
  };

  // console.log(values);

  const openNotificationWithIcon = (type) => {
    // const resp = await axios.get('http://localhost:3001/products');
    // console.log(password, email);
    notification[type]({
      message: 'Cadastro efetuado com sucesso!',
      duration: 3,
    });
  };

  // if (redirect) {
  //   return (
  //     <Redirect to="/customer/products" />
  //   );
  // }

  return (
    <section className="main-container">
      {isError && (
        <p data-testid="common_register__element-invalid_register"> TESTE </p>
      )}
      <section className="secondary-container">
        <Form
          form={ form }
          name="normal_login"
          className="login-form"
          onFinish={ onFinish }
        >
          <Form.Item
            colon
            label="Nome"
            name="nome"
            rules={ [
              {
                required: true,
                message: 'Por favor, insira seu nome!',
              },
              {
                min: 12,
                message: 'Nome deve possui ao menos 12 caracteres.',
              },
              { type: 'string', message: 'Insira um nome válido!' },
            ] }
            hasFeedback
          >
            <Input
              data-testid="common_register__input-name"
              prefix={ <UserOutlined className="site-form-item-icon" /> }
              placeholder="Seu nome"
            />
          </Form.Item>
          <Form.Item
            colon
            label="Login"
            name="email"
            rules={ [
              {
                required: true,
                message: 'Por favor, insira seu e-mail!',
              },
              { type: 'email', message: 'Insira um e-mail válido!' },
            ] }
            hasFeedback
          >
            <Input
              data-testid="common_register__input-email"
              prefix={ <UserOutlined className="site-form-item-icon" /> }
              placeholder="email@trybeer.com"
            />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={ [
              {
                required: true,
                message: 'Por favor, insira sua senha!',
              },
              {
                min: 6,
                message: 'Senha deve possui mais de 6 caracteres.',
              },
            ] }
            hasFeedback
          >
            <Input.Password
              data-testid="common_register__input-password"
              prefix={ <LockOutlined className="site-form-item-icon" /> }
              type="password"
              placeholder="Senha"
            />
          </Form.Item>

          <Form.Item shouldUpdate style={ { textAlign: 'center', marginBottom: 0 } }>
            {() => (
              <Button
                data-testid="common_register__button-register"
                style={ { backgroundColor: '#036b52' } }
                onClick={ () => openNotificationWithIcon('success') }
                block
                shape="round"
                htmlType="submit"
                className="login-form-button"
                disabled={
                  !form.isFieldsTouched(true)
                  || !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                Cadastrar
              </Button>
            )}
          </Form.Item>
        </Form>
      </section>
    </section>
  );
}

export default FormRegister;
