import React from 'react';
// import { Context } from '../../../provider/Provider';
// import CheckoutProduct from '../../../components/CheckoutProducts';

import Header from '../../../components/Header';
import ItemDetails from '../../../components/ItemDetails';

const products = [
  { description: 'Cerveja Stella 250ml', quantity: 3, price: 3.5 },
  { description: 'Cerveja Skol Latão 450ml', quantity: 4, price: 4.1 },
  { description: 'Salgadinho Torcida Churrasco', quantity: 1, price: 1.56 },
];

export default function OrderDetails() {
  // const { orderInProgress } = useContext(Context);

  return (
    <div>
      <Header />
      <h2>Detalhe do Pedido</h2>
      <table>
        <tr>
          <th>Pedido 0003</th>
          <th>P.Vend: Fulana Pereira</th>
          <th>07/04/2021</th>
          <th>ENTREGUE</th>
          <th>MARCAR COMO ENTREGUE</th>
        </tr>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
        </tr>
        <tbody>
          {
            products.map((order, index) => (
              <ItemDetails
                key={ index }
                order={ order }
                index={ index }
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
