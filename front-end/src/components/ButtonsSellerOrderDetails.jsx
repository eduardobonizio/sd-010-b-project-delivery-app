import React from 'react';
import PropTypes from 'prop-types';

function ButtonsSellerOrderDetails({ status, handleSaleStatus, id }) {
  return (
    <div>
      <button
        disabled={ status !== 'Pendente' }
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        onClick={ (e) => handleSaleStatus(e, id) }
        name="preparing"
      >
        Preparar Pedido
      </button>
      <button
        disabled={ status !== 'Preparando' }
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        onClick={ (e) => handleSaleStatus(e, id) }
        name="transit"
      >
        Saiu para entrega
      </button>
    </div>
  );
}

ButtonsSellerOrderDetails.propTypes = {
  status: PropTypes.string.isRequired,
  handleSaleStatus: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ButtonsSellerOrderDetails;
