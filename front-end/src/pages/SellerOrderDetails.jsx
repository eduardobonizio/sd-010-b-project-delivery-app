import React from 'react';
import { useParams } from 'react-router-dom';
import OrdersItemsTable from '../components/SellerOrderDetails/OrdersItemsTable';
import Header from '../components/Header';

import '../styles/SellerOrderDetails.css';

function SellerOrderDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Header userRole="seller" />
      <div className="seller-order-details-container">
        <h3>Detalhe do pedido</h3>
        <OrdersItemsTable />
      </div>
    </>
  );
}

export default SellerOrderDetails;
