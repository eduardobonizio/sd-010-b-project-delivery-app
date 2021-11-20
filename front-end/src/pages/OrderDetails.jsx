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

  const params = useParams();

  const formateDate = (date) => date.split('T')[0].split('-').reverse().join('/');
  useEffect(() => {
    APITOKEN.fetchSaleInfo(params.id).then((response) => {
      setsaleInfo(response.data);
      setisFetched(true);
      setStatus(saleInfo.productsInfo.status);
    });
  }, [params.id, saleInfo.productsInfo.status, setStatus]);

  const { productsInfo, seller } = saleInfo;
  return (
    <div>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        {params.id}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        {seller.name}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        {productsInfo.saleDate ? formateDate(productsInfo.saleDate) : ''}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </span>
      <button
        disabled={ status !== 'Em Trânsito' }
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        name="delivired"
        onClick={ (e) => handleSaleStatus(e, params.id) }
      >
        Marcar como entregue
      </button>
      {
        isFetched ? <OrderProductsTable products={ productsInfo.products } /> : ''
      }
      <p data-testid="customer_order_details__element-order-total-price">
        {isFetched && productsInfo.totalPrice.replace('.', ',')}
      </p>
    </div>
  );
}

export default OrderDetails;
