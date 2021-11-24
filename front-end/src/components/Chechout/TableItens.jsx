import React, { useContext } from 'react';
import Logincontext from '../../context/LoginContext';

export default function TableItens() {
  const { arrayProducts, setArrayProducts } = useContext(Logincontext);
  const { totalPrice, setTotalPrice } = useContext(Logincontext);

  const removeItems = (id, subTotal) => {
    const takeItOut = arrayProducts.filter((product) => product.id !== id);
    const newTotalPrice = totalPrice - subTotal;
    console.log(takeItOut);
    setArrayProducts(takeItOut);
    setTotalPrice(newTotalPrice);
  };

  return (
    <section style={ { padding: 80 } }>
      { arrayProducts.map(({ id, name, quantity, price, subTotal }, index) => (
        <div
          key={ index }
        >
          <span
            data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          >
            { index + 1 }
          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-name-${index}` }
          >
            { `${name}   ` }
          </span>
          { ' ' }
          <span
            data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          >
            { `${quantity}  ` }
          </span>
          { ' ' }
          <span
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            { `${price.replace('.', ',')}  ` }
            { console.log(subTotal) }
          </span>
          { ' ' }
          <span
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            { String(subTotal.toFixed(2)).replace('.', ',') }
          </span>
          { ' ' }
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            onClick={ () => removeItems(id, subTotal) }
          >
            { console.log(arrayProducts) }
            Remover
          </button>
        </div>
      )) }
    </section>
  );
}
