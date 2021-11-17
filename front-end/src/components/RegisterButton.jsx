import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function RegisterButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="warning"
      onClick={ () => navigate('/register') }
      data-testid="common_login__button-register"
      type="button"
    >
      Ainda não tenho conta
    </Button>
  );
}

export default RegisterButton;
