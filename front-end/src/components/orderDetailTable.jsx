import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSale } from '../services/sales';
import OrderDetailHeader from './orderDetailHeader';
import OrderDetailsTbody from './orderDetailsTbody';
import Thead from './Thead';
import SellerOrderHeader from './sellerOrderHeader';

function OrderDetailsTable(props) {
  const [orderDetail, setOrderDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState('');

  const { id } = props;
  const getOrderDetails = async (orderId) => {
    const response = await getSale(orderId);
    setOrderDetail(response.data);
    setLoading(false);
  };

  const saveLogin = () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoggedUser(user);
    }
  };

  useEffect(() => {
    getOrderDetails(id);
    saveLogin();
  }, [loading]);

  if (loading) return <p>Carregando</p>;

  return (
    <main>
      {loggedUser.role === 'customer'
        ? <OrderDetailHeader orderDetail={ orderDetail } />
        : <SellerOrderHeader orderDetail={ orderDetail } />}
      <table>
        <Thead />
        <OrderDetailsTbody role={ loggedUser.role } orderDetail={ orderDetail } />
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
