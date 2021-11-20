import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import APITOKEN from '../api/index';
import OrderCard from '../components/OrderCard';
import SellerOrderCard from '../components/SellerOrderCard';

function Orders() {
  const [ordersState, setOrdersState] = useState([]);
  const path = useLocation().pathname;
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const { token } = userInfo;
    APITOKEN.fetchOrders(token).then((data) => setOrdersState(data.data));
  }, []);

  console.log(ordersState);

  return (
    <div>
      <h1>Meus Pedidos</h1>
      {
        ordersState.map((order) => (path.includes('seller')
          ? <SellerOrderCard key={ order.id } order={ order } />
          : <OrderCard key={ order.id } order={ order } />))
      }
    </div>
  );
}

export default Orders;
