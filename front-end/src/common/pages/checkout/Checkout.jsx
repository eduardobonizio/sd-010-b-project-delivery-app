import React from 'react';
/* import { Context } from '../../../provider/Provider'; */
import CheckoutContainer from '../../../components/CheckoutComponents/CheckoutContainer';
import Header from '../../../components/ProductsComponents/Header';

function Checkout() {
  /* const { totalOrder } = React.useContext(Context); */
  return (
    <div>
      <Header />
      <CheckoutContainer />
    </div>

  );
}

export default Checkout;
