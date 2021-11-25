import React, { useContext } from 'react';
import LoginContext from '../../context/LoginContext';

export default function OrdersTable() {
  const { arrayProducts } = useContext(LoginContext);
  return (
    <table style={ { textAlign: 'center' } }>
      <tr>
        <td>Item</td>
        <td>Descrição</td>
        <td>Quantidade</td>
        <td>Valor Unitário</td>
        <td>Sub Total</td>
      </tr>
      {arrayProducts.map((product, index) => (
        <tr key={ product.id }>
          <td
            data-testid={
              `customer_order_details__element-order-table-item-number-${product.id}`
            }
          >
            {index + 1}
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-name-${product.id}`
            }
          >
            {product.name}

          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-quantity-${product.id}`
            }
          >
            {product.quantity}

          </td>
          <td
            data-testid={
              `customer_order_details__element-order-total-price-${product.id}`
            }
          >
            R$
            {product.price}
          </td>
          <td
            data-testid={
              `customer_order_details__element-order-table-sub-total-${product.id}`
            }
          >
            R$
            {' '}
            {product.subTotal}
          </td>
        </tr>
      ))}
    </table>
  );
}
