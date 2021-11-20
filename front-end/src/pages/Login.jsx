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
import './css/Login.css';

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

  const dispatchOnSubmit = async () => {
    const notFound = 404;

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.status === notFound) return setHideErrorMessage(false);
      const parsedResponse = response.data;
      const user = {
        name: parsedResponse.name,
        email: parsedResponse.email,
        role: parsedResponse.role,
        token: parsedResponse.token,
      };
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/customer/products');
    } catch (e) {
      setHideErrorMessage(false);
    }
  };

  return (
    <Container className="login">
      <Form>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Image src="images/logo.svg" className="login-logo" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>Disk-Birita</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <EmailInput
              title={ title }
              setStateEmail={ setStateEmail }
              emailTestId={ emailTestId }
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <PasswordInput
              setStatePassword={ setStatePassword }
              passwordTestId={ passwordTestId }
            />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <LoginButton dispatchOnSubmit={ dispatchOnSubmit } disabled={ disabled } />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <RegisterButton />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <LoginErrorMessage hideErrorMessage={ hideErrorMessage } />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
