import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSale } from '../services/sales';
import OrderDetailHeader from './orderDetailHeader';
import OrderDetailsTbody from './orderDetailsTbody';
import Thead from './Thead';

function OrderDetailsTable(props) {
  const [orderDetail, setOrderDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { id, role } = props;
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
      <OrderDetailHeader role={ role } orderDetail={ orderDetail } />
      <table>
        <Thead />
        <OrderDetailsTbody role={ role } orderDetail={ orderDetail } />
      </table>
      <p
        data-testid={ `${role}_order_details__element-order-total-price` }
      >
        { orderDetail.totalPrice.replace(/\./, ',') }
      </p>
    </main>
  );
}

OrderDetailsTable.propTypes = {
  id: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default OrderDetailsTable;
