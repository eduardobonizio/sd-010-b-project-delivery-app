import React, { useEffect, useState } from 'react';

import { getByCustomer } from '../apis/sales';
import OrderCard from '../components/OrderCard';

import '../styles/customerOrders.css';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  const setAllOrders = async () => {
    const getAllOrders = await getByCustomer(user.id);
    setOrders(getAllOrders);
  };

  useEffect(() => {
    setAllOrders();
  }, []);

  return (
    <main className="customer-orders__main-container">
      {console.log(orders)}
      {orders.length
      && orders.map((order, index) => <OrderCard key={ index } order={ order } />)}
    </main>
  );
}

export default CustomerOrders;
