import PropTypes from 'prop-types';
import React from 'react';

export default function TableProducts({ products, arrayDataTestid }) {
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        {products.map((el, index) => (
          <tr key={ el.id }>
            <th
              data-testid={ `${arrayDataTestid[0]}${order.seller_id}` }
            >
              {index}
            </th>
            <th
              data-testid={ `${arrayDataTestid[1]}${order.seller_id}` }
            >
              {el.name}
            </th>
            <th
              data-testid={ `${arrayDataTestid[2]}${order.seller_id}` }
            >
              {el.quantity}
            </th>
            <th
              data-testid={ `${arrayDataTestid[3]}${order.seller_id}` }
            >
              {el.price}
            </th>
            <th
              data-testid={ `${arrayDataTestid[4]}${order.seller_id}` }
            >
              {el.quantity * el.price}
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}

TableProducts.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
