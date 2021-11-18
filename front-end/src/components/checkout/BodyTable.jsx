import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../../helpers/localStorage';
import * as styles from './styles';

function BodyTable() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getLocalStorage = getFromLocalStorage('cart');
    setCartProducts(getLocalStorage);
  }, []);

  return (
    cartProducts.map((value, index) => (
      <styles.TrTable key={ index }>

        <styles.TdTable
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          {index + 1}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {value.name}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          {value.quantity}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          {`R$ ${(value.price).toFixed(2).replace('.', ',')}`}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          {`R$ ${(value.subTotal).toFixed(2).replace('.', ',')}`}
        </styles.TdTable>

        <styles.TdTable
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        >
          <styles.ButtonRemove>
            Remover
          </styles.ButtonRemove>
        </styles.TdTable>

      </styles.TrTable>
    ))
  );
}

export default BodyTable;
