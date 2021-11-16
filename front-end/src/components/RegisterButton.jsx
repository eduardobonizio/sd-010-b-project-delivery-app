import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function RegisterButton() {
  const history = useHistory();
  // const navigate = useNavigate();

  return (
    <Button
      variant="warning"
      onClick={ () => history.push('/register') }
      data-testid="common_login__button-register"
      type="button"
    >
      Ainda não tenho conta
    </Button>
  );
}

export default RegisterButton;
