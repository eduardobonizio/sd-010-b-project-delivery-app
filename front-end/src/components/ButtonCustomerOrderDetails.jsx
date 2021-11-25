import React from 'react';
import PropTypes from 'prop-types';

function ButtonCustomerOrderDetails({ status, handleSaleStatus, id }) {
  return (
    <div>
      <button
        disabled={ status !== 'Em Trânsito' }
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        name="delivered"
        onClick={ (e) => handleSaleStatus(e, id) }
      >
        Marcar como entregue
      </button>
    </div>
  );
}

ButtonCustomerOrderDetails.propTypes = {
  status: PropTypes.string.isRequired,
  handleSaleStatus: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ButtonCustomerOrderDetails;
