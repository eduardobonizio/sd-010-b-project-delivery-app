import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import api from '../services';

export default function Checkout() {
  const [salesProducts, setSalesProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await api.getAllSalesProducts();
      setSalesProducts(result.data);
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
          {salesProducts.map(({ products }) => products
            .map(({ name, price, SalesProducts: { quantity } }, index) => (
              <tr key={ name } data-testid={ `element-order-table-name-${index}` }>
                <td>{index}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{(quantity * price).toFixed(2)}</td>
                <td>Remover</td>
              </tr>
            )))}
        </tbody>
      </table>
    </div>
  );
}
