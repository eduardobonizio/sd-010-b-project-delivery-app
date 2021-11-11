import React from 'react';

export default function RedirectToRegister() {
  return (
    <a
      href="/register"
      data-testid="common_login__button-register"
    >
      Ainda não tenho conta
    </a>
  );
}
