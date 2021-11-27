import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import EmailInput from '../components/EmailInput';
import LoginButton from '../components/LoginButton';
import PasswordInput from '../components/PasswordInput';
import LoginErrorMessage from '../components/LoginErrorMessage';
import RegisterButton from '../components/RegisterButton';
import { validateEmailFormat, validatePassword } from '../helpers/validation';
import { serverUrl } from '../helpers/constants';

function Login() {
  const [email, setStateEmail] = useState('');
  const [password, setStatePassword] = useState('');
  const [disabled, setDisable] = useState(true);
  const [hideErrorMessage, setHideErrorMessage] = useState(true);
  const history = useHistory();
  const emailTestId = 'common_login__input-email';
  const passwordTestId = 'common_login__input-password';
  const title = 'Login';

  useEffect(() => {
    if (password && email) {
      if (validateEmailFormat(email) && validatePassword(password)) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  }, [email, password]);

  useEffect(() => {
    const alreadyLoggedIn = JSON.parse(localStorage.getItem('user'));
    if (alreadyLoggedIn) {
      const { role } = alreadyLoggedIn;
      if (role === 'customer') return history.push('/customer/products');
      if (role === 'seller') return history.push('/seller/orders');
    }
  });

  const dispatchOnSubmit = async () => {
    try {
      const response = await axios.post(`${serverUrl}/login`, { email, password });
      const { data } = response;
      localStorage.setItem('user', JSON.stringify(data));
      redirect.to[data.role]();
    } catch (e) {
      setHideErrorMessage(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form>
        <Row>
          <Col>
            <Image src="images/logo.svg" className=".login-logo" fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Disk-Birita</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <EmailInput
              title={ title }
              setStateEmail={ setStateEmail }
              emailTestId={ emailTestId }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PasswordInput
              setStatePassword={ setStatePassword }
              passwordTestId={ passwordTestId }
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <LoginButton dispatchOnSubmit={ dispatchOnSubmit } disabled={ disabled } />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <RegisterButton />
          </Col>
        </Row>
        <Row>
          <Col>
            <LoginErrorMessage hideErrorMessage={ hideErrorMessage } />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
