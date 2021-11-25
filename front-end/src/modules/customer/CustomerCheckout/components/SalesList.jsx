import React from 'react';
import Sale from './Sale';

import { useCustomer } from '../../../../hooks/useCustomer';

function SalesList() {
  const { sales, total } = useCustomer();
  return (
    <div>
      <h3>Finalizar pedido</h3>
      <div className="conteiner border">
        <table style={ { width: '100%' } }>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor-unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {sales.map((product, index) => (
            <Sale
              key={ product.productId }
              product={ product }
              index={ index }
            />
          ))}
        </table>
        <p>
          R$
          <span data-testid="customer_checkout__element-order-total-price">
            {total}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SalesList;
