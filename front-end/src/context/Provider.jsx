import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../services/user';

// ContextAPI
import Context from './Context';

function Provider({ children }) {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  const handleClick = async (user) => {
    if (!user.email || !user.password) setErrorMsg(true)
    const userToken = await loginUser({ email, password });
    console.log(userToken);
    // localStorage.setItem('userToken', data.token);
    if (userToken) <Redirect to="/customer/products" />;
  };

  const states = {
    name,
    setName,
    value,
    setValue,
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    handleClick,
  };

  return (
    <Context.Provider value={ states }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
