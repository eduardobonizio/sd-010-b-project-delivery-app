import React from 'react';
import Proptypes from 'prop-types';
import { Button } from 'react-bootstrap';

function CheckoutProductCard(props) {
  const { product, product: { id, name, price, quantity },
    setCart, cart } = props;
  const index = cart.indexOf(product);

  const removeItem = (productIndex) => {
    const newCart = [...cart];
    newCart.splice(productIndex, 1);
    return setCart(newCart);
  };

  return (
    <div>
      <div
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </div>
      <div>
        R$
        <div
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          { price.toString().split('.').join(',') }
        </div>
      </div>
      <div>
        R$
        <span
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          { (price * quantity).toFixed(2).toString().split('.').join(',') }
        </span>
      </div>
      <Button
        id={ id }
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        onClick={ () => removeItem(index) }
        variant="success"
      >
        Remover
      </Button>
    </div>
  );
}

CheckoutProductCard.propTypes = {
  product: Proptypes.shape({
    id: Proptypes.number,
    quantity: Proptypes.number,
    name: Proptypes.string,
    price: Proptypes.string,
    urlImage: Proptypes.string,
  }).isRequired,
  setCart: Proptypes.func.isRequired,
  cart: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default CheckoutProductCard;
