import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function RedirectToRegister() {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const redirectToRegister = () => {
    setShouldRedirect(true);
  };

  return (
    <button
      href="/register"
      type="button"
      data-testid="common_login__button-register"
      onClick={ () => redirectToRegister() }
    >
      Ainda não tenho conta
      { shouldRedirect && <Redirect to="/register" />}
    </button>
  );
}
