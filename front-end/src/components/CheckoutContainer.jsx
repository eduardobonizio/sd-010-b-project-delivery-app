import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProducts from './CheckoutProducts';
import PurshaseTotal from './PurchaseTotal';
import PurchaseOrderBtn from './PurchaseOrderBtn';
import DeliveryContainer from './DeliveryContainer';
import { Context } from '../provider/Provider';

function CheckoutContainer() {
  const { orderInProgress } = React.useContext(Context);
  return (
    <div>
      Finalizar Pedido
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {
            orderInProgress.map((order, index) => (
              <CheckoutProducts key={ index } order={ order } index={ index } />
            ))
          }
        </tbody>
      </table>
      <PurshaseTotal
        text="Total"
        data-testid="customer_checkout__element-order-total-price"
      />
      <DeliveryContainer />
      <PurchaseOrderBtn />
      <Link to="/customer/products">Voltar</Link>
    </div>
  );
}

export default CheckoutContainer;
