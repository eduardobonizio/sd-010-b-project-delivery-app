import React from 'react';
import Product from './Product';

function ListProducts() {
  return (
    <div>
      <h3>Detalhe do pedido</h3>
      <div>
        <span>PEDIDO</span>
        <span
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          id
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          data
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          status
        </span>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <div>
        <div>
          <span>Item</span>
          <span>Descrição</span>
          <span>Quantidade</span>
          <span>Valor unitario</span>
          <span>Sub-total</span>
        </div>
        <Product index="1" />
        <Product index="1" />
        <Product index="1" />
      </div>
      <p data-testid="seller_order_details__element-order-total-price">total</p>
    </div>
  );
}

export default ListProducts;
