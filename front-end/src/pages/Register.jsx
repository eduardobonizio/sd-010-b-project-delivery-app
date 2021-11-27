import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';
import RegisterErrorMessage from '../components/RegisterErrorMessage';
import {
  validateEmailFormat,
  validateName, validatePassword } from '../helpers/validation';
import { serverUrl } from '../helpers/constants';

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
      const response = await axios.post(
        `${serverUrl}/register`, { name, email, password },
      );
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
      const delay = 3000;
      setHidden(false);
      setTimeout(() => setHidden(true), delay);
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form className="align-self-center">
        <Row>
          <Col>
            <Image src="images/logo.svg" className=".login-logo" fluid />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <h3>Disk-Birita</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <NameInput
              nameTestId={ nameTestId }
              setStateName={ setStateName }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <EmailInput
              emailTestId={ emailTestId }
              setStateEmail={ setStateEmail }
              title={ title }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PasswordInput
              passwordTestId={ passwordTestId }
              setStatePassword={ setStatePassword }
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
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
          <Col>
            <RegisterErrorMessage hidden={ hidden } />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Register;
