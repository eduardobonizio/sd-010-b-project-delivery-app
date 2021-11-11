import React from 'react';
// import PropTypes from 'prop-types';

function Login() {
  return (
    <div>
      <form>
        <h1>Login</h1>
        <label htmlFor="username">
          Username:
          <input placeholder="Digite seu username" />
        </label>
        <label htmlFor="password">
          Senha:
          <input placeholder="Digite sua senha" />
        </label>
      </form>
    </div>
  );
}

// NavBar.propTypes = {
//   username: PropTypes.string.isRequired,
//   user: PropTypes.string.isRequired,
// };

export default Login;
