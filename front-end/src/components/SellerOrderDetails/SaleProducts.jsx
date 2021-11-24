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

function SaleProducts({ products }) {
  const itemRow = ({ item, index }) => {
    const { name, price, quantity } = item;

    const replaceDecimalSeparator = (value) => Number(value).toFixed(2).replace('.', ',');

    const subTotal = Number(price * quantity);
    const newPrice = replaceDecimalSeparator(price);
    const newSubTotal = replaceDecimalSeparator(subTotal);

    return (
      <div className="seller-item-row" key={ index }>
        <div data-testid={ `${dataTestId59}${index}` }>{ index + 1 }</div>
        <div data-testid={ `${dataTestId60}${index}` }>{name}</div>
        <div data-testid={ `${dataTestId61}${index}` }>{quantity}</div>
        <div data-testid={ `${dataTestId62}${index}` }>{newPrice}</div>
        <div data-testid={ `${dataTestId63}${index}` }>{newSubTotal}</div>
      </div>
    );
  };

  return (
    <div className="seller-items-container">
      { products && products.map((item, index) => itemRow({ item, index })) }
    </div>
  );
}

SaleProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SaleProducts;
