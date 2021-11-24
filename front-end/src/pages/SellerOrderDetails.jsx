import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import SaleProducts from '../components/SellerOrderDetails/SaleProducts';
import StatusControllers from '../components/SellerOrderDetails/StatusControllers';
import TableHeader from '../components/SellerOrderDetails/TableHeader';
import dataTestIdDict from '../utils/dataTestIdDict';
import '../styles/SellerOrderDetails.css';

const { dataTestId64 } = dataTestIdDict;

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
