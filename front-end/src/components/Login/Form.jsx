import React from 'react';

import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './loginForm.css';
import Logincontext from '../../context/LoginContext';

function LoginForm() {
  const [form] = Form.useForm();
  const [, forceUpdate] = React.useState({});

  const { setUserData } = React.useContext(Logincontext);

  React.useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    setUserData(values);
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
          form={ form }
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
                Login
              </Button>
            )}
          </Form.Item>
          <Form.Item>
            <Button
              data-testid="common_login__button-register"
              type="default"
              block
              shape="round"
              htmlType="submit"
              className="login-form-button"
            >
              Ainda não tenho cadastro
            </Button>
          </Form.Item>
        </Form>
      </section>
    </section>
  );
}

export default LoginForm;
