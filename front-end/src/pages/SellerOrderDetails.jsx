/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import APITOKEN from '../api/index';
import OrderProductsTable from '../components/OrderProductsTable';
import { useProductContext } from '../context/productContext';

function OrderDetails() {
  const { status, handleSaleStatus, setStatus } = useProductContext();
  const [saleInfo, setsaleInfo] = useState({
    productsInfo: {}, seller: {} });
  const [isFetched, setisFetched] = useState(false);
  // const [status, setStatus] = useState('');

  const params = useParams();

  const formateDate = (date) => date.split('T')[0].split('-').reverse().join('/');
  useEffect(() => {
    APITOKEN.fetchSaleInfo(params.id).then((response) => {
      setsaleInfo(response.data);
      setisFetched(true);
      setStatus(saleInfo.productsInfo.status);
    });
  }, [params.id, saleInfo.productsInfo.status, setStatus]);

  // const handleSaleStatus = (e) => {
  // return
  // const { name } = e.target;
  // const currStatus = name === 'delivery' ? 'Em Trânsito' : 'Preparando';

  // try {
  //   const res = await APITOKEN.updateSaleStatus(params.id, currStatus);
  //   if (res) handleStatus(currStatus);
  // } catch (err) {
  //   console.log(err);
  // }
  // };

  const { productsInfo } = saleInfo;

  return (
    <div>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <span data-testid="seller_order_details__element-order-details-label-order-id">
        {params.id}
        {' '}
      </span>
      {/* <span data-testid="seller_order_details__element-order-details-label-seller-name">
        {seller.name}
      </span> */}
      <span data-testid="seller_order_details__element-order-details-label-order-date">
        {productsInfo.saleDate ? formateDate(productsInfo.saleDate) : ''}
      </span>
      <button
        type="button"
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </button>
      <button
        disabled={ status !== 'Pendente' }
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        onClick={ (e) => handleSaleStatus(e, params.id) }
        name="preparing"
      >
        Preparar Pedido
      </button>
      <button
        disabled={ status !== 'Preparando' }
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        onClick={ (e) => handleSaleStatus(e, params.id) }
        name="transit"
      >
        Saiu para entrega
      </button>
      {
        isFetched ? <OrderProductsTable products={ productsInfo.products } /> : ''
      }
      <p data-testid="seller_order_details__element-order-total-price">
        {isFetched && productsInfo.totalPrice.replace('.', ',')}
      </p>
    </div>
  );
}

export default OrderDetails;
