import React from 'react';
import DetailsOrder from '../components/DetailsOrder';
import Header from '../components/Header';
import Total from '../components/Total';

function Checkout() {
  return (
    <main>
      <Header />
      <h4>Finalizar Pedido</h4>
      <DetailsOrder isRemoveBtn />
      <Total />
    </main>
  );
}

export default Checkout;
