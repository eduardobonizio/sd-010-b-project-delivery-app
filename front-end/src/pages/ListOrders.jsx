import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar';
import './css/Products.css';

function ListOrders() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [orders, setOrders] = useState();
  const { token } = JSON.parse(localStorage.getItem('user'));
  const config = {
    headers: {
      authorization: token,
    },
  };

  useEffect(() => {
    const getOrders = async () => {
      const dbOrders = await axios.get('http://localhost:3001/customer/orders', config);
      console.log(dbOrders);
      return dbOrders;
    };

    setOrders(getOrders());
  }, [config]);

  console.log(orders);
  return (
    <>
      <TopBar name={ name } />
      <div>
        UNDER CONSTRUCTION
      </div>
    </>
  );
}

export default ListOrders;
