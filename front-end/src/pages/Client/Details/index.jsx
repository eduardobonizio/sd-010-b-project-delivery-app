import React from 'react';

export default function Details() {
  return (
    <div>
      <p data-testid="customer_order_details__element-order-details-label-order-id">
        Pedido 1
      </p>
      <p data-testid="customer_order_details__element-order-details-label-seller-name">
        vendedor
      </p>
      <p data-testid="customer_order_details__element-order-details-label-order-date">
        dia
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status">
        status entregue
      </p>
    </div>
  );
}
