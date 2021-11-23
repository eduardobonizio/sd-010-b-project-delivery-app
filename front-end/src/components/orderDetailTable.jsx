import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSale } from '../services/sales';
import OrderDetailHeader from './orderDetailHeader';
import OrderDetailsTbody from './orderDetailsTbody';
import Thead from './Thead';

function OrderDetailsTable(props) {
  const [orderDetail, setOrderDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = props;
  const getOrderDetails = async (orderId) => {
    const response = await getSale(orderId);
    setOrderDetail(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getOrderDetails(id);
  }, [loading]);

  if (loading) return <p>Carregando</p>;

  return (
    <main>
      <OrderDetailHeader orderDetail={ orderDetail } />
      <table>
        <Thead />
        <OrderDetailsTbody orderDetail={ orderDetail } />
      </table>
      <p
        data-testid="customer_order_details__element-order-total-price"
      >
        { orderDetail.totalPrice.replace(/\./, ',') }
      </p>
    </main>
  );
}

OrderDetailsTable.propTypes = {
  id: PropTypes.string.isRequired,
};

export default OrderDetailsTable;
