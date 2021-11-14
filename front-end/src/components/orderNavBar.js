import PropTypes from 'prop-types';
import React from 'react';
import changeStatusFunc from '../helper/asynFunc/changeStatus';

export default function OrderNavBar({
  arrayDataTestid, order, isSeller, status, textButton }) {
  return (
    <div>
      <p
        data-testid={ `${arrayDataTestid[0]}` }
      >
        {order.id}
      </p>
      <p
        data-testid={ `${arrayDataTestid[1]}` }
      >
        {order.sale_date}
      </p>
      <p
        data-testid={ `${arrayDataTestid[2]}` }
      >
        {order.status}
      </p>
      {isSeller && (
        <button
          data-testid={ `${arrayDataTestid[3]}` }
          onClick={ changeStatusFunc('Preparando') }
          type="button"
        >
          Preparar pedido
        </button>)}
      <button
        data-testid={ `${arrayDataTestid[4]}` }
        onClick={ changeStatusFunc(status) }
        type="button"
      >
        {textButton}
      </button>
    </div>
  );
}

OrderNavBar.propTypes = {
  arrayDataTestid: PropTypes.array,
  isSeller: PropTypes.bool,
  order: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    status: PropTypes.string,
  }),
  status: PropTypes.string,
  textButton: PropTypes.string,
}.isRequired;
