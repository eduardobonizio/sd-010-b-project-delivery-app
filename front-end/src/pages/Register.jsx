import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Col, Container, Form, Row } from 'react-bootstrap';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';
import {
  validateEmailFormat,
  validateName, validatePassword } from '../helpers/validation';
import './css/Register.css';

function Register() {
  const history = useHistory();

  const [name, setStateName] = useState();
  const [email, setStateEmail] = useState();
  const [password, setStatePassword] = useState();
  const [disabled, setDisabled] = useState(true);
  const [hidden, setHidden] = useState(true);

  const nameTestId = 'common_register__input-name';
  const emailTestId = 'common_register__input-email';
  const passwordTestId = 'common_register__input-password';
  const title = 'Email';

  useEffect(() => {
    if (password && email && name) {
      if (validateEmailFormat(email) && validatePassword(password)
      && validateName(name)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [email, name, password]);

  const createUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', { name, email, password });
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
      console.log(e);
      return setHidden(false);
    }
  };

  return (
    <Container fluid className="register">
      <Form>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <NameInput
              nameTestId={ nameTestId }
              setStateName={ setStateName }
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <EmailInput
              emailTestId={ emailTestId }
              setStateEmail={ setStateEmail }
              title={ title }
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <PasswordInput
              passwordTestId={ passwordTestId }
              setStatePassword={ setStatePassword }
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button
              variant="success"
              data-testid="common_register__button-register"
              disabled={ disabled }
              onClick={ createUser }
              type="button"
            >
              Cadastrar
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <span
              data-testid="common_register__element-invalid_register"
              hidden={ hidden }
            >
              Usuário já existente!
            </span>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Register;
