import React from 'react';
import NavBar from '../../../components/navbar';
import TableDetails from '../../../components/TableDetails';

export default function Details() {
  return (
    <div>
      <NavBar />
      <p>Detalhes do Pedido</p>
      <TableDetails />
    </div>
  );
}
