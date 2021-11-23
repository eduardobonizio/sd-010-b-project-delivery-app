import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
// import api from '../services';

const orderTable = 'customer_checkout__element-order-table-item-number-';
const nameTable = 'customer_checkout__element-order-table-name-';
const quantityTable = 'customer_checkout__element-order-table-quantity-';
const unitPriceTable = 'customer_checkout__element-order-table-unit-price-';
const subTotalTable = 'customer_checkout__element-order-table-sub-total-';
const removeTable = 'customer_checkout__element-order-table-remove-';
export default function Checkout() {
  const [salesProducts, setSalesProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const cartProducts = JSON.parse(localStorage.getItem('products'));
      setSalesProducts(cartProducts);
    })();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitario</td>
            <td>Sub-total</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        <tbody>
          {salesProducts.map(({ price, quantity, name }, index) => (
            <tr key={ index }>
              <td data-testid={ `${orderTable}${index}` }>{index}</td>
              <td data-testid={ `${nameTable}${index}` }>{name}</td>
              <td data-testid={ `${quantityTable}${index}` }>{quantity}</td>
              <td data-testid={ `${unitPriceTable}${index}` }>{price}</td>
              <td
                data-testid={ `${subTotalTable}${index}` }
              >
                {(quantity * price).toFixed(2)}
              </td>
              <td data-testid={ `${removeTable}${index}` }>Remover</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
