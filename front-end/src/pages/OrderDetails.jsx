import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import APITOKEN from '../api/index';
import OrderProductsTable from '../components/OrderProductsTable';
import { useProductContext } from '../context/productContext';
import ButtonsSellerOrderDetails from '../components/ButtonsSellerOrderDetails';
import ButtonCustomerOrderDetails from '../components/ButtonCustomerOrderDetails';

function OrderDetails() {
  const { status, handleSaleStatus, setStatus } = useProductContext();
  const [saleInfo, setsaleInfo] = useState({
    productsInfo: {}, seller: {} });
  const [isFetched, setisFetched] = useState(false);

  const params = useParams();
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const { role } = userInfo;

  const formateDate = (date) => date.split('T')[0].split('-').reverse().join('/');
  useEffect(() => {
    APITOKEN.fetchSaleInfo(params.id).then((response) => {
      setsaleInfo(response.data);
      console.log(response.data);
      setisFetched(true);
      setStatus(saleInfo.productsInfo.status);
    });
  }, [params.id, saleInfo.productsInfo.status, setStatus]);

  const { productsInfo, seller } = saleInfo;
  return (
    <div>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <span data-testid={ `${role}_order_details__element-order-details-label-order-id` }>
        {params.id}
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-details-label-seller-name` }
      >
        {seller.name}
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-details-label-order-date` }
      >
        {productsInfo.saleDate ? formateDate(productsInfo.saleDate) : ''}
      </span>
      <span
        data-testid={
          `${role}_order_details__element-order-details-label-delivery-status`
        }
      >
        {status}
      </span>
      <div>

        {role === 'seller' ? (
          <ButtonsSellerOrderDetails
            status={ status }
            id={ params.id }
            handleSaleStatus={ handleSaleStatus }
          />
        ) : (
          <ButtonCustomerOrderDetails
            status={ status }
            id={ params.id }
            handleSaleStatus={ handleSaleStatus }
          />
        )}
      </div>
      {
        isFetched ? <OrderProductsTable products={ productsInfo.products } /> : ''
      }
      <p data-testid={ `${role}_order_details__element-order-total-price` }>
        {isFetched && productsInfo.totalPrice.replace('.', ',')}
      </p>
    </div>
  );
}

export default OrderDetails;
