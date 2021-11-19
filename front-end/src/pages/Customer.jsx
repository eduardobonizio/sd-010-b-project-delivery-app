import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Context from '../context/Context';
import api from '../api/index';
import CatalogProducts from '../components/CatalogProducts';
import './Customer.css';

function Customer() {
  const { userEmail, userData, setUserData, totalPrice } = useContext(Context);
  const navegate = useNavigate();

  const getUserData = async (email) => {
    try {
      const { data: user } = await api.getDataUser(email);

      const { token } = JSON.parse(localStorage.getItem('user'));
      user.token = token;
      localStorage.setItem('user', JSON.stringify(user));

      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  const reloadUserData = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) reloadUserData(user);

    if (!userData) {
      getUserData(userEmail);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="customer">
      <NavBar />
      <CatalogProducts />
      <button
        disabled={ totalPrice === '0.00' }
        type="button"
        onClick={ () => navegate('/customer/checkout') }
        data-testid="customer_products__button-cart"

      >
        Ver Carrinho: R$
        <p data-testid="customer_products__checkout-bottom-value">
          { totalPrice.toString().replace('.', ',') }
        </p>
      </button>
    </div>
  );
}

export default Customer;

/*
zebirita@email.com
$#zebirita#$
*/
