import React, { useState } from 'react';
import axios from 'axios';

import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './loginForm.css';
// import toDoContext from '../context/ToDoContext';

function LoginForm() {
  // const { setUserData } = useContext(toDoContext);
  const [isError, setIsError] = useState(false);

  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      const respLogin = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      console.log(respLogin);
    } catch (error) {
      console.log(error);
      console.log('entrou aqui');
      setIsError(true);
    }

    // setUserData(values.username);
    // console.log(values);
  };

  const openNotificationWithIcon = (type) => {
    // const resp = await axios.get('http://localhost:3001/products');
    // console.log(password, email);
    notification[type]({
      message: 'Login efetuado com sucesso!',
      duration: 3,
    });
  };

  return (
    <section className="main-container">
      { isError && (<p data-testid="common_login__element-invalid-email"> TESTE </p>) }
      <section className="secondary-container">
        <Form
          name="normal_login"
          className="login-form"
          onFinish={ onFinish }
        >
          <Form.Item
            colon
            label="Login"
            name="email"
            rules={ [
              {
                required: true,
                message: 'Por favor, insira seu e-mail!',
              },
              {
                pattern: /\S+@\S+\.\S+/,
                message: 'Insira um e-mail válido!',
              },
            ] }
          >
            <Input
              data-testid="common_login__input-email"
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
          >
            <Input.Password
              data-testid="common_login__input-password"
              prefix={ <LockOutlined className="site-form-item-icon" /> }
              type="password"
              placeholder="Senha"
            />
          </Form.Item>

          <Form.Item style={ { textAlign: 'center', marginBottom: 0 } }>
            <Button
              data-testid="common_login__button-login"
              style={ { backgroundColor: '#036b52' } }
              onClick={ () => openNotificationWithIcon('success') }
              block
              shape="round"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            <p style={ { marginBottom: 0 } }>ou</p>
            <Button
              data-testid="common_login__button-register"
              type="default"
              block
              shape="round"
              htmlType="submit"
              className="login-form-button"
            >
              Registre-se
            </Button>
          </Form.Item>
        </Form>
      </section>
    </section>
  );
}

export default LoginForm;
