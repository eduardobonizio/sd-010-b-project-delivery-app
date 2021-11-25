import React from 'react';
import NavBar from '../components/Navbar';
import tableTitles from '../services/tableTitles';
import FormDelivery from '../components/FormDelivery';

import { useProductContext } from '../context/productContext';

export default function Checkout() {
  const {
    cart,
    handleTotalValue,
    handleRemoveProduct,
  } = useProductContext();

  return (
    <div>
      <NavBar />
      <table>
        <thead>
          <tr>
            {tableTitles.map((title, index) => (
              <th key={ index }>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map((el, index) => (
            <tr key={ el.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {el.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {el.qty}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {el.price.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {(el.price * el.qty).toFixed(2).replace('.', ',')}
              </td>
              <td>
                <button
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  type="button"
                  onClick={ () => handleRemoveProduct(el.id) }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p data-testid="customer_checkout__element-order-total-price">
        {handleTotalValue().replace('.', ',')}
      </p>
      <div className="delivery">
        <FormDelivery
          total={ handleTotalValue().replace('.', ',') }
          cart={ cart }
        />
      </div>
    </div>
  );
}
