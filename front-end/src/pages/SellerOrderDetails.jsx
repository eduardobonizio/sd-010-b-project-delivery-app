import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import APITOKEN from '../api/index';
import OrderProductsTable from '../components/OrderProductsTable';

function OrderDetails() {
  const [saleInfo, setsaleInfo] = useState({
    productsInfo: {}, seller: {} });
  const [isFetched, setisFetched] = useState(false);

  const params = useParams();

  const formateDate = (date) => date.split('T')[0].split('-').reverse().join('/');
  useEffect(() => {
    APITOKEN.fetchSaleInfo(params.id).then((response) => {
      setsaleInfo(response.data);
      setisFetched(true);
    });
  }, [params.id]);

  const { productsInfo } = saleInfo;
  console.log(productsInfo);
  console.log('sim');
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
        {productsInfo.status}
      </button>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
      >
        Preparar Pedido
      </button>
      <button
        disabled
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
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
