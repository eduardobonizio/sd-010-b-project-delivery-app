import React, { useContext } from 'react';
import { getFromLocalStorage } from '../services/servicesLocalStorage';
import NavBar from './component/navbar';
import Context from '../provider/Context';

function Produtos() {
  const getlogin = () => {
    const login = getFromLocalStorage('login_delivery');
    return login;
  };

  const {
    User,
    // setUser
  } = useContext(Context);
  console.log(User, 'user', getlogin());

  return (
    <div>
      <NavBar />
      <h1>tela de produtos</h1>
    </div>
  );
}

export default Produtos;
