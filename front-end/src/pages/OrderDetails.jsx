import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function OrderDetails() {
  const params = useParams();
  console.log(params);

  return (
    <Header userRole="customer" />
  );
}

export default OrderDetails;
