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
  const { productsInCart } = useContext(ProductsContext);
  const cartItems = productsInCart.filter(({ quantity }) => quantity > 0);

  console.log(cartItems);

  return (
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
  );
}
