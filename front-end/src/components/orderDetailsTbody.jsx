import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function OrderDetailsTbody(props) {
  const [loading, setLoading] = useState(true);
  const { orderDetail, quantity } = props;
  const { products } = orderDetail;

  const totalProdPrice = (price, index) => (
    (quantity[index].quantity * price).toFixed(2).toString().replace(/\./, ','));

  useEffect(() => {
    setLoading(false);
  }, [quantity]);

  if (loading) return <p>Carregando</p>;
  return (
    <tbody>
      { products.length > 1 && quantity.length > 1
        ? products.map((prod, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {prod.id}
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-name-${index}` }
            >
              {prod.name}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {quantity[index].quantity}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {prod.price.replace(/\./, ',') }
            </td>
            <td
              data-testid={ `customer_order_details__element-order-total-price-${index}` }
            >
              {totalProdPrice(prod.price, index)}
            </td>
          </tr>
        ))
        : null }
    </tbody>
  );
}

OrderDetailsTbody.propTypes = {
  orderDetail: PropTypes.objectOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  quantity: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrderDetailsTbody;
