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
              className="td-item"
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {prod.id}
            </td>
            <td
              className="td-name"
              data-testid={ `customer_order_details__element-order-table-name-${index}` }
            >
              {prod.name}
            </td>
            <td
              className="td-quant"
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {prod.salesProducts.quantity}
            </td>
            <td
              className="td-price"
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {prod.price.replace(/\./, ',') }
            </td>
            <td
              className="td-total"
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
