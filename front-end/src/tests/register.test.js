import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../pages/register';

test('Verificando se existe o campo Email', () => {
  render(<Register />);
  const inputEmail = screen.getByPlaceholderText('email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'text');
});

test('Verificando se existe o campo Password', () => {
  render(<Register />);
  const inputPassword = screen.getByPlaceholderText('senha');
  expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toHaveProperty('type', 'password');
});

test('Verificando se existe o campo Name', () => {
  render(<Register />);
  const inputName = screen.getByPlaceholderText('seu nome');
  expect(inputName).toBeInTheDocument();
  expect(inputName).toHaveProperty('type', 'text');
});

test('Verificando se existe um botão', () => {
  render(<Register />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});

test('verifica submissão formulario', () => {
  render(<Register />);

  const NAME_USER = 'usuario teste';
  const EMAIL_USER = 'email@email.com';
  const PASSWORD_USER = '123456';

  const inputName = screen.getByPlaceholderText('seu nome');
  const inputEmail = screen.getByPlaceholderText('email');
  const inputPassword = screen.getByPlaceholderText('senha');
  const btn = screen.getByRole('button');

  userEvent.type(inputName, NAME_USER);
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.type(inputPassword, PASSWORD_USER);
  userEvent.click(btn);
});