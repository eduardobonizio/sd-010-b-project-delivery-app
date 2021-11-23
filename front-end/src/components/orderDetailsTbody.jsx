import React, {} from 'react';
import PropTypes from 'prop-types';

function OrderDetailsTbody(props) {
  const { orderDetail } = props;
  const { products } = orderDetail;

  const totalProdPrice = (price, qtd) => (
    (qtd * price).toFixed(2).toString().replace(/\./, ','));

  return (
    <tbody>
      { products.length > 1
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
              {prod.salesProducts.quantity}
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
              {totalProdPrice(prod.price, prod.salesProducts.quantity)}
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
};

export default OrderDetailsTbody;
