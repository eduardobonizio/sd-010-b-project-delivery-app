/* eslint-disable max-len */
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
    <div className="mt-32 ml-20 mr-20">
      <h2 className="inline-block py-2 text-3xl border-b-2 border-yellow-color">Finalizar Pedido</h2>
      <div className="ml-32 mr-32">
        <table className="w-full mt-20 text-center">
          <thead>
            <tr className="py-3">
              {tableHeader.map((th, idx) => (
                <th key={ idx }>{th}</th>
              ))}
            </tr>
          </thead>
          <TableOrderBody cartItems={ cartItems } />
        </table>
      </div>
      <div className="flex justify-end w-full pr-32">
        <div className="w-64 px-8 py-2 mt-10 text-xl font-medium rounded-md bg-yellow-color">
          Total: R$
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {totalPrice.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
    </div>
  );
}
