import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function LogoutButton() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <Button
      variant="primary"
      onClick={ logout }
      data-testid="customer_products__element-navbar-link-logout"
      type="button"
    >
      Sair
    </Button>
  );
}

export default LogoutButton;
