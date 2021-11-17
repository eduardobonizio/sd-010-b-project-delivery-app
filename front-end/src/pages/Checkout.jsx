import React from 'react';
import DetailsAddress from '../components/DetailsAddress';
import ListCheckoutProdutos from '../components/ListCheckoutProdutos';
import NavBar from '../components/Navbar';

function Checkout() {
  return (
    <div>
      <NavBar />
      <div>
        <h3>Finalizar Pedido</h3>
        <ListCheckoutProdutos />
      </div>
      <div>
        <h3>Detalhes e Endereço para Entrega</h3>
        <DetailsAddress />
      </div>
    </div>
  );
}

export default Checkout;
