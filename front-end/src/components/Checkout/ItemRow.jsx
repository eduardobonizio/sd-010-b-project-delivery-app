import React from 'react';
import PropTypes from 'prop-types';
import dataTestIdDict from '../../utils/dataTestIdDict';

const {
  dataTestId22,
  dataTestId23,
  dataTestId24,
  dataTestId25,
  dataTestId26,
  dataTestId27,
} = dataTestIdDict;

function ItemRow({ cartItem }) {
  const { item, index } = cartItem;
  const { id, name, preco, quantity, subTotal } = item;

  return (
    <div className="item-row">
      <div data-testid={ `${dataTestId22}${index}` }>{id}</div>
      <div data-testid={ `${dataTestId23}${index}` }>{name}</div>
      <div data-testid={ `${dataTestId24}${index}` }>{quantity}</div>
      <div data-testid={ `${dataTestId25}${index}` }>{`R$ ${preco}`}</div>
      <div data-testid={ `${dataTestId26}${index}` }>{subTotal}</div>
      <div data-testid={ `${dataTestId27}${index}` }>Remover</div>
    </div>
  );
}

ItemRow.propTypes = {
  cartItem: PropTypes.shape({
    item: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      preco: PropTypes.string,
      quantity: PropTypes.number,
      subTotal: PropTypes.number,
    }),
    index: PropTypes.number,
  }).isRequired,
};

export default ItemRow;
