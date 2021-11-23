import React, { useState, useEffect } from 'react';
import APITOKEN from '../api/index';
import OrderCard from '../components/OrderCard';
import NavBar from '../components/Navbar';

function Orders() {
  const [ordersState, setOrdersState] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    const { token } = userInfo;
    APITOKEN.fetchOrders(token).then(({ data }) => setOrdersState(data));
  }, [userInfo]);

  return (
    <div>
      <NavBar />
      <h1>Meus Pedidos</h1>
      {
        ordersState
          .map((order) => (<OrderCard
            key={ order.id }
            order={ order }
            role={ userInfo.role }
          />))
      }
    </div>
  );
}

export default Orders;
