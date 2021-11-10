import React from 'react';

import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './loginForm.css';
// import toDoContext from '../context/ToDoContext';

function LoginForm() {
  // const { setUserData } = useContext(toDoContext);

  const onFinish = (values) => {
    // setUserData(values);
    console.log(values);
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Login efetuado com sucesso!',
      duration: 3,
    });
  };

  return (
    <section className="main-container">
      <section className="secondary-container">
        <Form
          name="normal_login"
          className="login-form"
          onFinish={ onFinish }
        >
          <Form.Item
            colon
            label="Login"
            name="username"
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
              prefix={ <UserOutlined className="site-form-item-icon" /> }
              placeholder="email@trybeer.com"
            />
          </Form.Item>
          <Form.Item
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
              prefix={ <LockOutlined className="site-form-item-icon" /> }
              type="password"
              placeholder="Senha"
            />
          </Form.Item>

          <Form.Item style={ { textAlign: 'center', marginBottom: 0 } }>
            <Button
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
              onClick={ () => openNotificationWithIcon('success') }
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
