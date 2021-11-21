import React from 'react';
import PropTypes from 'prop-types';

function Order({ id }) {
  const handleClick = () => {

  };
  return (
    <button name={ id } type="button" onClick={ handleClick }>
      <span>Pedido</span>
      <span>STATUS</span>
      <span>DATE</span>
      <span>PRICE</span>
    </button>);
}

Order.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Order;
