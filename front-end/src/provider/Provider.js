/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import tokenHandler from '../helper/functions/tokenHandler';
import { getAllProducts, postPurchase } from '../services/api';
import translateToCamelCase from '../helper/functions/translateProductsToCamelCase';

const Context = createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orderInProgress, setOrderInProgress] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [dataUser, setDataUser] = useState({});
  const [sellers, setSellers] = useState([]);
  const [chooseSeller, setChooseSeller] = useState();
  const [purchaseAddress, setPurchaseAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [ordered, setOrdered] = useState([]);
  const location = useLocation();
  const history = useHistory();

  async function checkoutPurchase() {
    const user = JSON.parse(localStorage.getItem('user'));
    const listItem = orderInProgress.map((item) => {
      const revisedItem = item;
      revisedItem.productId = item.id;
      delete revisedItem.id;
      delete revisedItem.name;
      delete revisedItem.price;
      delete revisedItem.url;
      return revisedItem;
    });
    const checkoutObj = {
      userId: user.userId,
      sellerId: chooseSeller,
      totalPrice: totalOrder,
      deliveryAddress: purchaseAddress,
      deliveryNumber: addressNumber,
      saleDate: new Date(),
      status: 'Pendente',
      products: listItem,
    };
    console.log(totalOrder, 'totalORder');
    const { token } = JSON.parse(localStorage.getItem('user'));
    const newPurchase = await postPurchase(checkoutObj, token);
    history.push(`/customer/orders/${newPurchase.data.data[0].SaleId}`);
    setOrderInProgress([]);
    setTotalOrder(0);
  }

  function removeProduct(productIndex) {
    const clearProduct = orderInProgress.filter(
      (_product, index) => index !== productIndex,
    );
    return setOrderInProgress(clearProduct);
  }

  const getAllPurchase = async () => {
    const { data } = await getPurchase(dataUser.id);
    setProducts(data);
  };

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
    getAllPurchase,
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
    const price = localStorage.getItem('price');
    setTotalOrder(JSON.parse(price) || 0);
    setOrderInProgress(JSON.parse(carrinho) || []);
  }, [history, location]);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(orderInProgress));
    localStorage.setItem('price', JSON.stringify(totalOrder));
    const cart = orderInProgress.map(
      ({ price, quantity }) => parseFloat(price) * quantity,
    );
    if (cart.length > 0) {
      const value = cart.reduce((acc, curr) => acc + curr);
      return setTotalOrder(parseFloat(value.toFixed(2)));
    }
    return setTotalOrder(0);
  }, [orderInProgress, totalOrder]);

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export { Provider, Context };
