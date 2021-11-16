import React, { useContext } from 'react';
import Context from '../context/Context';

const RenderOrders = () => {
  const { orders, setOrders } = useContext(Context);

  const deleteOrder = (order) => {
    const newOrders = orders.filter((o) => o.name !== order.name);
    setOrders(newOrders);
  };

  const calculateSubtotal = (quantity, price) => quantity * price;

  return (
    <tbody>
      {orders.map((order, index) => (
        <tr key={ index + 1 }>
          <td
            data-testid={ `customer_checkout__element-order-table-item-number-
          ${index + 1}` }
          >
            {index}
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-name-${index}`
            }
          >
            {order.name}
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-quantity-${index}`
            }
          >
            {order.quantity}

          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-unit-price-${index}`
            }
          >
            {order.price}

          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-sub-total-
              ${index}`
            }
          >
            {calculateSubtotal(order.quantity, order.price)}
          </td>
          <button
            data-testid={
              `customer_checkout__element-order-table-remove-${index}`
            }
            type="button"
            onClick={ () => deleteOrder(order) }
          >
            Remover

          </button>
        </tr>
      ))}
    </tbody>
  );
};

export default RenderOrders;