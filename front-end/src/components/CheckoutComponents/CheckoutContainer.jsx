/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProducts from './CheckoutProducts';
import PurshaseTotal from './PurchaseTotal';
import PurchaseOrderBtn from './PurchaseOrderBtn';
import DeliveryContainer from './DeliveryContainer';
import { Context } from '../../provider/Provider';

function CheckoutContainer() {
  const { orderInProgress } = React.useContext(Context);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    setData(orderInProgress);
  }, [orderInProgress]);

  const heading = () => (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Subtotal</th>
        <th>Remover</th>
      </tr>
    </thead>
  );

  return data === 0 ? (
    <div>
      <h1>Carrinho Vazio</h1>
      <Link to="/customer/products">
        Voltar
      </Link>
    </div>
  ) : (
    <div>
      <table>
        <colgroup>
          <col span="1" style={ { width: '10%' } } />
          <col />
          <col span="1" style={ { width: '20%' } } />
          <col span="1" style={ { width: '20%' } } />
          <col span="1" style={ { width: '20%' } } />
          <col span="1" style={ { width: '20%' } } />
        </colgroup>
        { heading() }
        <tbody>
          {
            data.map((order, index) => (
              <CheckoutProducts key={ index } order={ order } index={ index } />
            ))
          }
        </tbody>
      </table>
      <PurshaseTotal />
      <DeliveryContainer />
      <PurchaseOrderBtn />
      <Link to="/customer/products">
        Voltar
      </Link>
    </div>
  );
}

export default CheckoutContainer;
