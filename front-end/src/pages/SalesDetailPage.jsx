import React from 'react';
import Header from '../components/Header';
import SaleDetails from '../components/Saledetails/SaleDetails';

function SalesDetailPage() {
  return (
    <div>
      <Header userRole="customer" />
      <SaleDetails />
    </div>
  );
}

export default SalesDetailPage;
