import React, { useState, useEffect } from 'react';
import APITOKEN from '../api/index';
import OrderCard from '../components/OrderCard';

function Orders() {
  const [ordersState, setOrdersState] = useState([]);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const { token } = userInfo;
    APITOKEN.fetchOrders(token).then((data) => setOrdersState(data.data));
  }, []);
  return (
    <div>
      <h1>Meus Pedidos</h1>
      {
        ordersState.map((order) => <OrderCard key={ order.id } order={ order } />)
      }
    </div>
  );
}

export default Orders;
