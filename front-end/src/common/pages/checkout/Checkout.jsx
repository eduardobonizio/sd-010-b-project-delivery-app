import React from 'react';
import { Context } from '../../../provider/Provider';
import CheckoutContainer from '../../../components/CheckoutContainer';

function Checkout() {
  const { totalOrder } = React.useContext(Context);
  return totalOrder > 0 ? <CheckoutContainer /> : <h2>Vazio</h2>;
}

export default Checkout;
