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
  const { item, index, functions } = cartItem;
  const { id, name, preco, quantity, subTotal } = item;
  const { removeItem } = functions;

  return (
    <div className="item-row">
      <div data-testid={ `${dataTestId22}${index}` }>{id}</div>
      <div data-testid={ `${dataTestId23}${index}` }>{name}</div>
      <div data-testid={ `${dataTestId24}${index}` }>{quantity}</div>
      <div data-testid={ `${dataTestId25}${index}` }>{`R$ ${preco}`}</div>
      <div data-testid={ `${dataTestId26}${index}` }>{subTotal}</div>
      <button
        data-testid={ `${dataTestId27}${index}` }
        type="button"
        onClick={ () => removeItem(id) }
      >
        remover
      </button>
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
    functions: PropTypes.shape({
      removeItem: PropTypes.func,
    }).isRequired,
  }).isRequired,
};

export default ItemRow;
