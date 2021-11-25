import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser, createUser } from '../services/user';
import getProducts from '../services/product';
// ContextAPI
import Context from './Context';

function Provider({ children }) {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotaPrice] = useState(0);
  const history = useHistory();

  const getAllProducts = async () => {
    const { data: allProducts } = await getProducts();
    setProducts(allProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const setToken = (token) => {
    localStorage.setItem('user', JSON.stringify(token));
    history.push({ pathname: '/customer/products' });
  };

  const handleClickLogin = async (user) => {
    if (!user.email || !user.password) setErrorMsg(true);
    const { data } = await loginUser({ email, password });
    setToken(data);
  };

  const handleClickRegister = async () => {
    const create = await createUser({ name, email, password });
    if (!create) return setErrorMsg(true);
    setToken(create.data);
    return create;
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
    handleClickLogin,
    handleClickRegister,
    products,
    totalPrice,
    setTotaPrice,
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
