import React, { useContext } from 'react';
import MyContext from '../../context/Context';
import { getFromLocalStorage, setOnLocalStorage } from '../../helpers/localStorage';
import * as styles from './styles';

function BodyTable() {
  const {
    setCartProduct,
    cartProduct,
  } = useContext(MyContext);

  const getLocalStorage = getFromLocalStorage('cart');
  const totalCartProducts = getFromLocalStorage('totalCart');

  function handleOnClickRemove(event) {
    const { name, value } = event.target;
    const removeItem = cartProduct.filter((valueI) => valueI.name !== name);
    const subTotal = Number(totalCartProducts - value).toFixed(2);

    setCartProduct(removeItem);
    setOnLocalStorage('cart', removeItem);

    setOnLocalStorage('totalCart', subTotal);
  }

  return (
    getLocalStorage.map((value, index) => (
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
          <styles.ButtonRemove
            value={ value.subTotal.toFixed(2) }
            name={ value.name }
            onClick={ handleOnClickRemove }
          >
            Remover
          </styles.ButtonRemove>
        </styles.TdTable>

      </styles.TrTable>
    ))
  );
}

export default BodyTable;
