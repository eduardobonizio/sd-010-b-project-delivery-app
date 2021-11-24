import React from 'react';
import NavBar from '../components/NavBar';
import TableOrdersCustomer from '../components/TableOdersCutomer';

function OrdersCustomer() {
  return (
    <>
      <NavBar />
      <p> Aqui vai um table order que vai fazer um map dos pedidos do cliente</p>
      <TableOrdersCustomer />
    </>
  );
}

export default OrdersCustomer;
