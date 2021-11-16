import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './loginForm.css';

import Logincontext from '../../context/LoginContext';

function LoginForm() {
  const history = useHistory();
  const { setUserData } = React.useContext(Logincontext);
  const [form] = Form.useForm();
  const [, forceUpdate] = React.useState({});
  const [isError, setIsError] = useState(false);
  const [redirect, setRedirect] = useState(false);

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
      setRedirect(true);
    } catch (error) {
      setIsError(true);
    }
  };

  if (redirect) {
    return (
      <Redirect to="/customer/products" />
    );
  }

  return (
    <section className="main-container">
      {isError && (
        <section className="container-error-message">
          <Alert
            data-testid="common_login__element-invalid-email"
            message="Usuário não cadastrado!"
            type="error"
            showIcon
          />
        </section>)}
      <section className="secondary-container">
        <Form
          form={ form }
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
              { type: 'email', message: 'Insira um e-mail válido!' },
            ] }
            hasFeedback
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
            hasFeedback
          >
            <Input.Password
              data-testid="common_login__input-password"
              prefix={ <LockOutlined className="site-form-item-icon" /> }
              type="password"
              placeholder="Senha"
            />
          </Form.Item>

          <Form.Item shouldUpdate style={ { textAlign: 'center', marginBottom: 0 } }>
            {() => (
              <Button
                data-testid="common_login__button-login"
                style={ { backgroundColor: '#036b52' } }
                block
                shape="round"
                htmlType="submit"
                className="login-form-button"
                disabled={
                  !form.isFieldsTouched(true)
                  || !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                Login
              </Button>
            )}
          </Form.Item>
        </Form>
        <Button
          data-testid="common_login__button-register"
          type="default"
          block
          shape="round"
          htmlType="submit"
          className="login-form-button"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho cadastro
        </Button>
      </section>
    </section>
  );
}

export default LoginForm;
