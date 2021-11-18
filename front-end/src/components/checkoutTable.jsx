import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Address from './address';
import Tbody from './Tbody';
import Thead from './Thead';
import { postSales, postSaleProducts } from '../services/sales';
import getProducts from '../services/products';

function Table() {
  const [total, setTotal] = useState('0,00');
  const [adress, setAdress] = useState('');
  const [adressNumber, setAdressNumber] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [saleId, setSaleId] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsQuant, setProductsQuant] = useState([]);

  const getTotal = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (Object.entries(carrinho).length !== 0) {
      const calculate = Object.values(carrinho).reduce((acc, curr) => acc + curr);
      return setTotal(calculate.toFixed(2).replace(/\./, ','));
    }
    return setTotal('0,00');
  };

  const onClick = (e) => {
    const { name, value } = e.target;

    if (name === 'address') setAdress(value);
    if (name === 'number') setAdressNumber(value);
    if (name === 'userName') setSellerId(parseInt(value, 10));
  };

  const fetchData = async () => {
    const result = await getProducts();
    const resultData = await result.data;
    setProducts(resultData);
    setLoading(false);
  };

  const getProductsQuantity = (sellId) => {
    const arrayInfo = [];
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    Object.keys(carrinho).forEach((productId) => {
      const selectedProduct = products.find(({ id }) => id === Number(productId));
      const uniPrice = selectedProduct.price;
      const totalPrice = carrinho[productId];
      const quant = totalPrice / uniPrice;
      const info = {
        productId: Number(productId),
        quantity: quant,
        saleId: Number(sellId),
      };
      arrayInfo.push(info);
    });

    return setProductsQuant(arrayInfo);
  };

  const postSaleProductsTable = async () => {
    const salesProductsBody = productsQuant;
    console.log(salesProductsBody);

    await postSaleProducts(salesProductsBody);
  };

  const postSale = async (e) => {
    e.preventDefault();
    const { email, token } = JSON.parse(localStorage.getItem('user'));
    const newSaleBody = {
      email,
      sellerId,
      totalPrice: Number(total.replace(',', '.')),
      deliveryAddress: adress,
      deliveryNumber: adressNumber,
      status: 'Pendente',
    };

    const resp = await postSales(newSaleBody, token);
    setSaleId(resp.data);
    getProductsQuantity(resp.data);

    return setRedirect(true);
  };

  useEffect(() => {
    getTotal();
    fetchData();
  }, [loading]);

  useEffect(() => {
    postSaleProductsTable();
  }, [productsQuant]);

  if (loading) return <div>Carregando...</div>;
  if (redirect) return <Redirect to={ `/customer/orders/${saleId}` } />;
  return (
    <table>
      <p>{adress}</p>
      <p>{adressNumber}</p>
      <p>{sellerId}</p>
      <Thead />
      <Tbody getTotal={ getTotal } />
      <p data-testid="customer_checkout__element-order-total-price">{ total }</p>
      <Address clickFuntion={ onClick } postFunction={ postSale } />
    </table>
  );
}

export default Table;
