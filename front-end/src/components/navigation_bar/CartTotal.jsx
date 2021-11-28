import React from 'react';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './css/shoppingCart.css';
import { Nav } from 'react-bootstrap';

function CartTotal({ cartTotal }) {
  const history = useHistory();
  const redirectToCart = () => history.push('/customer/checkout');
  return (
    <div className="d-flex">
      <Nav.Link href="/customer/checkout">
        <div
          className="container-test"
          data-testid="customer_products__checkout-bottom-value"
          disabled={ cartTotal <= 0 }
        >
          <ShoppingCartOutlined style={ { fontSize: '2.5rem' } } />
          <button
            type="button"
            data-testid="customer_products__button-cart"
            className="clear-button-style price-tag"
            disabled={ cartTotal <= 0 }
            onClick={ redirectToCart }
          >
            { ` ${cartTotal.toFixed(2).toString().split('.').join(',')}` }
          </button>

        </div>
      </Nav.Link>
    </div>
  );
}

CartTotal.propTypes = {
  cartTotal: Proptypes.number.isRequired,
};

export default CartTotal;
