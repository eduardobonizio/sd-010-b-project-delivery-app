import React from 'react';
import OrdersTable from './OrdersTable';

export default function OrderCard() {
  return (
    <div>
      <section style={ { display: 'flex', justifyContent: 'space-around' } }>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          PEDIDO: 000

        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P.Vend: nome pessoa

        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          Data Pedido

        </p>
        <p
          data-testid="customer_order_details__element-
          order-details-label-delivery-status"
        >
          Entregue

        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue

        </button>
      </section>
      <section>
        <OrdersTable />
      </section>
    </div>
  );
}
