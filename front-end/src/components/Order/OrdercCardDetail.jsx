import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoginContext from '../../context/LoginContext';
// import PropTypes from 'prop-types';
// import moment from 'moment';
import OrdersTable from './OrdersTable';

function OrderCardDetail() {
  const { orders } = useContext(LoginContext);
  const [seller, setSeller] = useState([]);
  // const orderId = useParams();
  const { id } = useParams();
  const orderDetail = orders.find((el) => el.id === parseInt(id, 10));
  console.log(orderDetail);
  const { sale_date: saleDate, seller_id: sellerId, status } = orderDetail;

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${sellerId}`)
      .then(({ data }) => {
        setSeller(data);
      });
  }, [sellerId]);

  const formatDate = moment(saleDate).format('DD/MM/YYYY');

  return (
    <div>
      { console.log('seller', seller) }
      <section style={ { display: 'flex', justifyContent: 'space-around' } }>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          { `PEDIDO: 000 ${orderDetail.id}` }
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P.Vend: nome pessoa

        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { `Data Pedido ${formatDate}` }
        </p>
        <p
          data-testid="customer_order_details__element
          -order-details-label-delivery-status"
        >
          { status }
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue

        </button>
      </section>
      <section>
        <OrdersTable />
      </section>
    </div>
  );
}

// OrderCardDetail.propTypes = {
//   id: PropTypes.number.isRequired,
//   saleDate: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
//   totalPrice: PropTypes.string.isRequired,
// };

export default OrderCardDetail;
