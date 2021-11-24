import React, { useEffect, useState } from 'react';

import { getAll } from '../apis/sales';
import SellerCard from '../components/SellerCard';

import '../styles/customerOrders.css';

function SellerOrder() {
  const [orders, setOrders] = useState([]);

  const setAllOrders = async () => {
    const getAllOrders = await getAll();
    setOrders(getAllOrders);
  };

  useEffect(() => {
    setAllOrders();
  }, []);

  return (
    <main className="customer-orders__main-container">
      {console.log(orders)}
      {orders.length
      && orders.map((order, index) => <SellerCard key={ index } order={ order } />)}
    </main>
  );
}
export default SellerOrder;
