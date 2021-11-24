import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../components/TopBar';
import OrderDetailsTable from '../components/OrderDetailsTable';
import './css/Products.css';

function ListSellerSaleById() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [order, setOrder] = useState();
  const history = useHistory();

  useEffect(() => {
    const historyArray = history.location.pathname.split('/');
    const orderId = historyArray[historyArray.length - 1];
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: {
        authorization: token,
      },
    };

    const getOrder = async () => {
      const myOrder = await axios.get(`http://localhost:3001/seller/orders/${orderId}`, config);
      setOrder(myOrder.data.order);
    };

    getOrder();
  }, [history.location.pathname]);

  console.log(order);
  if (order) {
    const endArraySlice = 4;
    const dateArray = order.saleDate.split('-');
    const day = `${dateArray[2][0]}${dateArray[2][1]}`;
    const month = `${dateArray[1][0]}${dateArray[1][1]}`;
    const year = `${dateArray[0].slice(0, endArraySlice)}`;
    const formattedDate = `${day}/${month}/${year}`;
    const label = 'customer_order_details__element-order-details-label-delivery-status';
    return (
      <>
        <TopBar name={ name } />
        <p>Detalhe do pedido</p>
        <div>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            Pedido
            { order.id }
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. Vendedora:
            { order.seller.name }
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { formattedDate }
          </span>
          <span
            data-testid={ label }
          >
            { order.status }
          </span>
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            disabled
          >
            MARCAR COMO ENTREGUE
          </button>
          <OrderDetailsTable order={ order.products } />
          <span>Total: R$</span>
          <span
            data-testid="customer_order_details__element-order-total-price"
          >
            { order.totalPrice.split('.').join(',') }
          </span>
        </div>
      </>
    );
  }
  return (<p>Carregando</p>);
}

export default ListSellerSaleById;
