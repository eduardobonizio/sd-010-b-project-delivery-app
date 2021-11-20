import React from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const params = useParams();
  console.log(params);

  return (
    <div>Detalhes do pedido</div>
  );
}

export default OrderDetails;
