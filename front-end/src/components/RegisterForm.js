import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return {
    name,
    email,
    password,
    render: (
      <>
        Nome
        <input
          onChange={ ({ target }) => setName(target.value) }
          type="text"
          data-testid="common_register__input-name"
          placeholder="Seu nome"
        />
        <br />
        Email
        <input
          onChange={ ({ target }) => setEmail(target.value) }
          type="email"
          data-testid="common_register__input-email"
          placeholder="seu-email@site.com.br"
        />
        <br />
        Senha
        <input
          onChange={ ({ target }) => setPassword(target.value) }
          type="password"
          data-testid="common_register__input-password"
          placeholder="********"
        />
      </>
    ),
  };
}
