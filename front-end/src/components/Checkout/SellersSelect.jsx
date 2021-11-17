import React from 'react';
import PropTypes from 'prop-types';
import dataTestIdDict from '../../utils/dataTestIdDict';

const { dataTestId29 } = dataTestIdDict;

function SellersSelect({ sellers }) {
  return (
    <label htmlFor="sellers" className="order-address-details-field">
      P. Vendedora Responsável
      <select name="sellers" id="sellers" className="p-10" data-testid={ dataTestId29 }>
        {sellers.map((seller) => (
          <option key={ seller } value="fulana">{seller}</option>
        ))}
      </select>
    </label>
  );
}

SellersSelect.propTypes = {
  sellers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SellersSelect;
