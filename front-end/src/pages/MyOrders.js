import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Order from '../components/Order';

function MyOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { data } = axios.get();
    setOrders([...orders, data]);
  }, [orders]);

  return (
    <>
      {orders.map(({ total_price, status, sale_date }, index) => (
        <Order total_price={total_price} status={status} sale_date={sale_date} id={ index } key={ index } />
      ))}
    </>
  );
}
export default MyOrder;
