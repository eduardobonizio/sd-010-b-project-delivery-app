import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={ () => navigate('/register') }
      data-testid="common_login__button-register"
      type="button"
    >
      Ainda não tenho conta
    </button>
  );
}

export default RegisterButton;
