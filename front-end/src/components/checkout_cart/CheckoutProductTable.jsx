import React from 'react';
import Proptypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './css/checkoutProductTable.css';

function CheckoutProductTable(props) {
  const { cartTotal, setCart, cart } = props;

  const removeItem = (productIndex) => {
    const newCart = [...cart];
    newCart.splice(productIndex, 1);
    return setCart(newCart);
  };

  return (
    <Table hover className="table-format">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          cart && cart.map(({ id, name, price, quantity }, index) => (
            <tr key={ id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                { name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                { quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {`R$${price.toString().split('.').join(',')}`}
              </td>
              <td>
                R$
                <span
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { (price * quantity).toFixed(2).toString().split('.').join(',') }
                </span>
              </td>
              <td>
                <button
                  id={ id }
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={ () => removeItem(index) }
                  type="button"
                  className="clear-button-style"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))
        }
        <tr>
          <td className="total-price" colSpan="6">
            {`Total: R$${cartTotal.toFixed(2).toString().split('.').join(',')}`}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

CheckoutProductTable.propTypes = {
  setCart: Proptypes.func.isRequired,
  cart: Proptypes.arrayOf(Proptypes.object),
  cartTotal: Proptypes.number.isRequired,
};

CheckoutProductTable.defaultProps = {
  cart: [],
};

export default CheckoutProductTable;
