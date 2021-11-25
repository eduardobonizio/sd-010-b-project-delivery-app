import React, { useEffect, useState } from 'react';

import { getById } from '../apis/sales';
import OrderDetailsCard from '../components/OrderDetailsCard';

import '../styles/customerOrderDetails.css';

export default function CustomerOrderDetails() {
  const dataTestId = 'customer_order_details__element-order-';
  const user = JSON.parse(localStorage.getItem('user'));
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      const orderUrl = window.location.href.split('/');
      const orderId = orderUrl[orderUrl.length - 1];
      const order = await getById({ id: orderId, user });
      console.log(order);
      setOrderItems(order.products);
    };
    getOrder();
  }, []);

  return (
    <main className="customer-order-details__main-container">
      <h4>Detalhes do Pedido</h4>
      <main className="customer-order-details__table-container">
        <section className="customer-order-info-container">
          <div
            data-testid={ `${dataTestId}details-label-order-id` }
            className="customer-order-info-order"
          >
            2
          </div>
          <div
            data-testid={ `${dataTestId}details-label-seller-name` }
            className="customer-order-info-customer"
          >
            Fulana Pereira
          </div>
          <div
            data-testid={ `${dataTestId}details-label-order-date` }
            className="customer-order-info-date"
          >
            07/04/2021
          </div>
          <div
            data-testid={ `${dataTestId}details-label-delivery-status` }
            className="customer-order-info-status"
          >
            ENTREGUE
          </div>
          <div className="customer-order-info-action">MARCAR COMO ENTREGUE</div>
        </section>
        <main className="customer-order-details__container">
          <section className="customer-order-details__header">Item</section>
          <section className="customer-order-details__header">Descrição</section>
          <section className="customer-order-details__header">Quantidade</section>
          <section className="customer-order-details__header">Valor</section>
          <section className="customer-order-details__header">Subtotal</section>
        </main>
        {orderItems.map((orderItem, index) => (
          <OrderDetailsCard
            key={ index }
            dataId={ orderItem.product_id }
            quantity={ orderItem.quantity }
            index={ index }
          />))}
      </main>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        Total R$ 100,00
      </button>
    </main>
  );
}
