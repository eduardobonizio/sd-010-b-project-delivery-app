import React from 'react';
import Proptypes from 'prop-types';
import addZeroes from '../helper/functions/addZeroes';

export default function ItemDetails({ order, index }) {
  const { description, quantity, price } = order;

  return (
    <tr>
      <th>
        { index + 1 }
      </th>
      <th>
        { description }
      </th>
      <th>
        { quantity }
      </th>
      <th>
        { price }
      </th>
      <th>
        { addZeroes(price * quantity) }
      </th>
    </tr>
  );
}

ItemDetails.propTypes = {
  order: Proptypes.shape({
    description: Proptypes.string.isRequired,
    quantity: Proptypes.number.isRequired,
    price: Proptypes.string.isRequired,
  }).isRequired,
  index: Proptypes.number.isRequired,
};
