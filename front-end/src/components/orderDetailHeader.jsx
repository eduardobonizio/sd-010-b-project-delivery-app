import React from 'react';

function OrderDetailHeader() {
  const order = { id: 3, sellerId: 'fulana', saleDate: '19/11/2021', status: 'Pendente' };
  const { id, sellerId, saleDate, status } = order;

  return (
    <header>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-order-${id}`
        }
      >
        { `000${id}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { `P.Vend: ${sellerId}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { saleDate }
      </p>
      <p
        data-testid="
          customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </p>
      <p data-testid="customer_order_details__button-delivery-check">
        <button type="button">Marcar como entregue</button>
      </p>
    </header>
  );
}

export default OrderDetailHeader;
