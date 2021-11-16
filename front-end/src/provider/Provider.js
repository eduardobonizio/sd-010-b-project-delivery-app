/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import tokenHandler from '../helper/functions/tokenHandler';
import { getAllProducts } from '../services/api';
import translateToCamelCase from '../helper/functions/translateProductsToCamelCase';

const Context = createContext();
const seller = [
  {
    id: 1,
    name: 'João',
  },
];

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orderInProgress, setOrderInProgress] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [dataUser, setDataUser] = useState({});
  const [sellers, setSellers] = useState(seller);
  const [chooseSeller, setChooseSeller] = useState();
  const [purchaseAddress, setPurchaseAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [ordered, setOrdered] = useState([]);
  const location = useLocation();
  const history = useHistory();

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

  function removeProduct(productIndex) {
    const clearProduct = orderInProgress.filter(
      (_product, index) => index !== productIndex,
    );
    return setOrderInProgress(clearProduct);
  }

  const context = {
    products,
    setProducts,
    orderInProgress,
    setOrderInProgress,
    totalOrder,
    setTotalOrder,
    dataUser,
    setDataUser,
    chooseSeller,
    setChooseSeller,
    purchaseAddress,
    setPurchaseAddress,
    addressNumber,
    setAddressNumber,
    checkoutPurchase,
    removeProduct,
    ordered,
    setOrdered,
    sellers,
    setSellers,
  };

  const fetchProducts = async () => {
    const data = await getAllProducts();
    const response = data.map((el) => (
      translateToCamelCase(el)
    ));

    return setProducts(response);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    tokenHandler(token, location, history);
    fetchProducts();
    const carrinho = localStorage.getItem('carrinho');
    setOrderInProgress(JSON.parse(carrinho) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(orderInProgress));
  }, [orderInProgress]);

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export { Provider, Context };
