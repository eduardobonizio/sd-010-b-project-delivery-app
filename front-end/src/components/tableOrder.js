import React, { useContext } from 'react';
import ProductsContext from '../context/productContext';
import TableOrderBody from './tableOrderBody';

const tableHeader = [
  'Item',
  'Descrição',
  'Quantidade',
  'Valor Unitário',
  'Sub-total',
  'Remover Item',
];

export default function TableOrder() {
  const { productsInCart, totalPrice } = useContext(ProductsContext);
  const cartItems = productsInCart.filter(({ quantity }) => quantity > 0);

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeader.map((th, idx) => (
              <th key={ idx }>{th}</th>
            ))}
          </tr>
        </thead>
        <TableOrderBody cartItems={ cartItems } />
      </table>
      <div>
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {totalPrice.toFixed(2).replace('.', ',')}
        </span>
      </div>
    </>
  );
}
