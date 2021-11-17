import React from 'react';
// import PropTypes from 'prop-types'

import OrderCard from '../components/OrderCard';

import '../styles/customerOrders.css';

const orders = [{
  order: '0001',
  status: 'Pendente',
  date: '08/04/21',
  price: 23.80,
}, {
  order: '0002',
  status: 'Preparando',
  date: '08/04/21',
  price: 23.80,
}, {
  order: '0003',
  status: 'Entregue',
  date: '08/04/21',
  price: 23.80,
}];

function CustomerOrders() {
  return (
    <main className="customer-orders__main-container">
      {orders.map((order, index) => <OrderCard key={ index } order={ order } />)}
    </main>
  );
}

CustomerOrders.propTypes = {

};

export default CustomerOrders;
