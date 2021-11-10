/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import tokenHandler from '../helper/functions/tokenHandler';
import moment from 'moment';

const Context = createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orderInProgress, setOrderInProgress] = useState();
  const [totalOrder, setTotalOrder] = useState(0);
  const [dataUser, setDataUser] = useState({});
  const [chooseSeller, setChooseSeller] = useState('');
  const [purchaseAddress, setPurchaseAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const location = useLocation();
  const history = useHistory();

  const context = {
    products, setProducts, orderInProgress, setOrderInProgress, totalOrder, setTotalOrder, dataUser, setDataUser, chooseSeller, setChooseSeller, purchaseAddress, setPurchaseAddress, addressNumber, setAddressNumber, checkoutPurchase
  };

  function checkoutPurchase() {
    const checkoutKeys = {
      userId: dataUser.id,
      sellerId: chooseSeller.id,
      totalPrice: totalOrder,
      deliveryAddress: purchaseAddress,
      deliveryNumber: addressNumber,
      saleDate: new Date(),
      status: 'Pendente',
      products: orderInProgress,
    };
    console.log(checkoutKeys);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    tokenHandler(token, location, history);
  }, []);

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export { Provider, Context };
