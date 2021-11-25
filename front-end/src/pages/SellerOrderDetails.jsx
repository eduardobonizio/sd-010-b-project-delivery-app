import React from 'react';
import { orderItems } from '../utils/constants';
import '../styles/customerOrderDetails.css';

export default function SellerOrderDetails() {
  const sellerDT = 'seller_order_details__';
  return (
    <main className="customer-order-details__main-container">
      <h4>Detalhes do Pedido</h4>
      <main className="customer-order-details__table-container">
        <section className="customer-order-info-container">
          <div
            className="customer-order-info-order"
            data-testid={ `${sellerDT}element-order-details-label-order-id` }
          >
            Pedido: 0003
          </div>
          <div className="customer-order-info-customer">Para: Fulana de Tal</div>
          <div
            className="customer-order-info-date"
            data-testid={ `${sellerDT}element-order-details-label-order-date` }
          >
            07/04/2021
          </div>
          <div
            className="customer-order-info-status"
            data-testid={ `${sellerDT}element-order-details-label-delivery-status` }
          >
            PENDENTE
          </div>
          <button
            type="button"
            className="customer-order-info-action"
            data-testid={ `${sellerDT}button-preparing-check` }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            className="customer-order-info-action"
            data-testid={ `${sellerDT}button-dispatch-check` }
          >
            SAIU PARA ENTREGA
          </button>
        </section>
        <main className="customer-order-details__container">
          <section className="customer-order-details__header">Item</section>
          <section className="customer-order-details__header">Descrição</section>
          <section className="customer-order-details__header">Quantidade</section>
          <section className="customer-order-details__header">Valor</section>
          <section className="customer-order-details__header">Subtotal</section>
        </main>
        {orderItems.map((orderItem, id) => (
          <main key={ id } className="customer-order-details__container">
            <section
              className="customer-order-details__item"
              data-testid={ `${sellerDT}element-order-table-item-number-` }
            >
              { orderItem.item }
            </section>
            <section
              className="customer-order-details__description"
              data-testid={ `${sellerDT}element-order-table-name-` }
            >
              { orderItem.title }
            </section>
            <section
              className="customer-order-details__quantity"
              data-testid={ `${sellerDT}element-order-table-quantity-` }
            >
              { orderItem.quantity }
            </section>
            <section
              className="customer-order-details__price"
              data-testid={ `${sellerDT}element-order-table-unit-price-` }
            >
              { `R$ ${orderItem.price.toFixed(2)}` }
            </section>
            <section
              className="customer-order-details__subtotal"
              data-testid={ `${sellerDT}element-order-table-sub-total-` }
            >
              { `R$ ${orderItem.subtotal.toFixed(2)}` }
            </section>
          </main>))}
        <h5>
          Total:
          <strong data-testid={ `${sellerDT}element-order-total-price` }>99.90</strong>
        </h5>
      </main>
    </main>
  );
}
