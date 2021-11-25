import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
// import api from '../services';
import DetailsAddress from '../components/detailsAddress';

const orderTable = 'customer_checkout__element-order-table-item-number-';
const nameTable = 'customer_checkout__element-order-table-name-';
const quantityTable = 'customer_checkout__element-order-table-quantity-';
const unitPriceTable = 'customer_checkout__element-order-table-unit-price-';
const subTotalTable = 'customer_checkout__element-order-table-sub-total-';
const removeTable = 'customer_checkout__element-order-table-remove-';
export default function Checkout() {
  const [salesProducts, setSalesProducts] = useState([]);
  // const [seller, setSeller] = useState({});
  useEffect(() => {
    (async () => {
      const cartProducts = JSON.parse(localStorage.getItem('products'));
      setSalesProducts(cartProducts);
    })();
  }, []);

  const productPrice = (price) => {
    const min = 3;
    const newPrice = price.toString().replace('.', ',');
    if (newPrice.length === min) return `${newPrice}0`;
    return newPrice;
  };
  const returnTotal = () => Object.values(salesProducts).reduce((acc, { total }) => {
    acc += total; return acc;
  }, 0);
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
          {Object.values(salesProducts).map(({ price, quant, name, total }, index) => (
            <tr key={ index }>
              <td data-testid={ `${orderTable}${index}` }>{index + 1}</td>
              <td data-testid={ `${nameTable}${index}` }>{name}</td>
              <td data-testid={ `${quantityTable}${index}` }>{quant}</td>
              <td data-testid={ `${unitPriceTable}${index}` }>{productPrice(price)}</td>
              <td
                data-testid={ `${subTotalTable}${index}` }
              >
                {productPrice(total)}
              </td>
              <td data-testid={ `${removeTable}${index}` }>Remover</td>
            </tr>
          ))}
          <p>
            total=
            <span data-testid="customer_checkout__element-order-total-price">
              {productPrice(returnTotal())}
            </span>
          </p>
          {/* {Object.values(salesProducts).map((value) => console.log(value))} */}
        </tbody>
      </table>
      <DetailsAddress />
    </div>
  );
}
