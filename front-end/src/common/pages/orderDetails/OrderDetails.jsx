import React, { useContext } from 'react';
import { Context } from '../../../provider/Provider';
// import CheckoutProduct from '../../../components/CheckoutProducts';

import Header from '../../../components/Header';
import ItemDetails from '../../../components/ItemDetails';
import PurshaseTotal from '../../../components/PurchaseTotal';

// const products = [
//   { description: 'Cerveja Stella 250ml', quantity: 3, price: 3.5 },
//   { description: 'Cerveja Skol Latão 450ml', quantity: 4, price: 4.1 },
//   { description: 'Salgadinho Torcida Churrasco', quantity: 1, price: 1.56 },
// ];

const dlvStatus = 'customer_order_details__element-order-details-label-delivery-status';

export default function OrderDetails() {
  const { orderInProgress } = useContext(Context);
  console.log('DETAILS: ', orderInProgress);

  return (
    <div>
      <Header />
      <h2>Detalhe do Pedido</h2>
      <table>
        <tr>
          <th
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            Pedido 0003
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P.Vend: Fulana Pereira
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            07/04/2021
          </th>
          <th
            data-testid={ `${dlvStatus}` }
          >
            ENTREGUE
          </th>
          <th
            data-testid="customer_order_details__button-delivery-check"
          >
            MARCAR COMO ENTREGUE
          </th>
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
            orderInProgress.map((order, index) => (
              <ItemDetails
                key={ index }
                order={ order }
                index={ index }
              />
            ))
          }
        </tbody>
      </table>
      <PurshaseTotal text="Total" />
    </div>
  );
}
