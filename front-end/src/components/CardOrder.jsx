import React from 'react';
import PropTypes from 'prop-types';
import ID from '../utils/dataTestIdDict';

function Order({ sale }) {
  return (
    <div>
      <div data-testid={ ID.dataTestId33 }>{ sale.id }</div>
      <div data-testid={ ID.dataTestId34 }>{ sale.status }</div>
      <div>
        <div data-testid={ ID.dataTestId35 }>{ sale.saleDate }</div>
        <div>{ sale.totalPrice }</div>
      </div>
    </div>
  );
}

Order.propTypes = PropTypes.objectOf({
  id: PropTypes.number,
  date: PropTypes.string,
  totalPrice: PropTypes.number,
}).isRequired;

export default Order;
