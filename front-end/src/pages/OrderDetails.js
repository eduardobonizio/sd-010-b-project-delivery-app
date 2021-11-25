import React from 'react';
import NavBar from '../components/navBar';

export default function OrderDetails() {
  return (
    <>
      <NavBar />

      <p>Detalhe do pedido</p>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        Id do pedido
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        Pessoa vendedora
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        data da venda
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        status do pedido
      </span>
      <span data-testid="customer_order_details__button-delivery-check">
        botao marcar como entregue
      </span>

      <span data-testid="customer_order_details__element-order-table-item-number-0">
        numero do item
      </span>
      <span data-testid="customer_order_details__element-order-table-name-0">
        nome do item
      </span>
      <span data-testid="customer_order_details__element-order-table-quantity-0">
        quantidade do item
      </span>
      <span data-testid="customer_order_details__element-order-table-sub-total-0">
        valor do item
      </span>
      <span data-testid="customer_order_details__element-order-total-price-0">
        sub total do item
      </span>
      <span data-testid="depois colocar o data testid aqui">
        total
      </span>
    </>
  );
}
