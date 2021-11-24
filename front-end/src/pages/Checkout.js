import React from 'react';
import DetailsOrder2 from '../components/DetailsOrder2';
import Header from '../components/Header';
import Total from '../components/Total';
import FooterCheckout from '../components/FooterCheckout';

function Checkout() {
  return (
    <main>
      <Header />
      <h4>Finalizar Pedido</h4>
      <DetailsOrder2 isRemoveBtn />
      <Total />
      <FooterCheckout />
    </main>
  );
}

export default Checkout;
