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
      <table className="main-checkout-table">
        <Thead />
        <OrderDetailsTbody orderDetail={ orderDetail } />
        <p
          className="total-price-checkout"
          data-testid="customer_order_details__element-order-total-price"
        >
          { `Valor total: ${orderDetail.totalPrice.replace(/\./, ',')}` }
        </p>
      </table>
    </main>
  );
}

OrderDetailsTable.propTypes = {
  id: PropTypes.string.isRequired,
};

export default OrderDetailsTable;
