import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'

import { getAll } from '../apis/sales';
import OrderCard from '../components/OrderCard';

import '../styles/customerOrders.css';

function CustomerOrders() {
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
      && orders.map((order, index) => <OrderCard key={ index } order={ order } />)}
    </main>
  );
}

CustomerOrders.propTypes = {

};

export default CustomerOrders;
