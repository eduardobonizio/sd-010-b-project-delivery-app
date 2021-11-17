import React from 'react';
import PropTypes from 'prop-types';

function OrderContainer({ order }) {
  const { id, saleDate, status, totalPrice } = order;
  return (
    <div>
      <ul>
        <li>{`Pedido: ${id}`}</li>
        <li>{`Fechamento: ${saleDate}`}</li>
        <li>{`Status: ${status}`}</li>
        <li>{`Total: ${totalPrice}`}</li>
      </ul>
    </div>
  );
}

OrderContainer.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;

export default OrderContainer;
