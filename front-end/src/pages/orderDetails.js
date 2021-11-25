import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import OrderDetailTable from '../components/orderDetailTable';

const OrderDetails = (props) => {
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const { match: { params: { id } } } = props;
  return (
    <main className="main-checkout-page">
      <Navbar name={ name } role={ role } />
      <OrderDetailTable id={ id } />
    </main>
  );
};

OrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default OrderDetails;
