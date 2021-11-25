import React, { useContext } from 'react';
import MyContext from '../../context/Context';
import * as styles from './styles';

function BodyTable() {
  const { products } = useContext(MyContext);

  return (
    products.map((value, index) => (
      <styles.TrTable key={ index }>

        <styles.TdTable
          data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
        >
          {index + 1}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `seller_order_details__element-order-table-name-${index}` }
        >
          {value.name}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
        >
          {value.SalesProduct.quantity}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
        >
          {`R$ ${(Number(value.price)).toFixed(2).replace('.', ',')}`}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          {`R$ ${
            (value.SalesProduct.quantity * Number(value.price))
              .toFixed(2)
              .replace('.', ',')}`}
        </styles.TdTable>

      </styles.TrTable>
    ))
  );
}

export default BodyTable;
