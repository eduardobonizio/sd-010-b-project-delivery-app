import React from 'react';
import ProductsTable from '../components/ProductsTable';
import DeliveryForm from '../components/DeliveryForm';

export default function Checkout() {
  return (
    <>
      <h1>Finalizar Pedido</h1>
      <ProductsTable />
      <h1>Detalhes e Endereço para Entrega</h1>
      <DeliveryForm />
    </>
  );
}
