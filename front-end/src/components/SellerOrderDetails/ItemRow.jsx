import React from 'react';
import PropTypes from 'prop-types';
import dataTestIdDict from '../../utils/dataTestIdDict';

const {
  dataTestId59,
  dataTestId60,
  dataTestId61,
  dataTestId62,
  dataTestId63,
} = dataTestIdDict;

function ItemRow({ cartItem }) {
  const { item, index, functions } = cartItem;
  const { name, price, quantity } = item;
  const { replaceDecimalSeparator } = functions;

  const newPrice = replaceDecimalSeparator(price);
  const subTotal = price * quantity;
  const newSubTotal = replaceDecimalSeparator(subTotal.toFixed(2));

  return (
    <div className="seller-item-row">
      <div data-testid={ `${dataTestId59}${index}` }>{ index + 1 }</div>
      <div data-testid={ `${dataTestId60}${index}` }>{name}</div>
      <div data-testid={ `${dataTestId61}${index}` }>{quantity}</div>
      <div data-testid={ `${dataTestId62}${index}` }>{newPrice}</div>
      <div data-testid={ `${dataTestId63}${index}` }>{newSubTotal}</div>
    </div>
  );
}

ItemRow.propTypes = {
  cartItem: PropTypes.shape({
    item: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
      subTotal: PropTypes.number,
    }),
    index: PropTypes.number,
    functions: PropTypes.shape({
      removeItem: PropTypes.func,
      replaceDecimalSeparator: PropTypes.func,
    }).isRequired,
  }).isRequired,
};

export default ItemRow;
