import React, { useEffect, useState } from 'react';

import { getBySeller } from '../apis/sales';
import SellerCard from '../components/SellerCard';

function SellerOrder() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  const setAllOrders = async () => {
    const getAllOrders = await getBySeller(user.id);
    setOrders(getAllOrders);
  };

  useEffect(() => {
    setAllOrders();
  }, [setAllOrders]);

  return (
    <main className="customer-orders__main-container">
      {console.log(orders)}
      {orders.length
      && orders.map((order, index) => <SellerCard key={ index } order={ order } />)}
    </main>
  );
}

export default SellerOrder;
