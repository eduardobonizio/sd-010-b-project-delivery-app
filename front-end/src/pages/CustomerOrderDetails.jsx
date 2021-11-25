import React from 'react';

import '../styles/customerOrderDetails.css';

const orderItems = [{
  item: 1,
  title: 'Cerveja Stellaad',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skolad',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stellab',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skolb',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stellac',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skolc',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stellaa',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skola',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stellas',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skols',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stellaa',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skola',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stellab',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skolb',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stellac',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skolc',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stella',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skol',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}, {
  item: 1,
  title: 'Cerveja Stella',
  quantity: 3,
  price: 3.50,
  subtotal: 10.50,
}, {
  item: 2,
  title: 'Cerveja Skol',
  quantity: 4,
  price: 4.10,
  subtotal: 16.50,
}];

export default function CustomerOrderDetails() {
  return (
    <main className="customer-order-details__main-container">
      <h4>Detalhes do Pedido</h4>
      <main className="customer-order-details__table-container">
        <section className="customer-order-info-container">
          <div className="customer-order-info-order">Pedido: 0003</div>
          <div className="customer-order-info-customer">Para: Fulana de Tal</div>
          <div className="customer-order-info-date">07/04/2021</div>
          <div className="customer-order-info-status">ENTREGUE</div>
          <div className="customer-order-info-action">MARCAR COMO ENTREGUE</div>
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
            <section className="customer-order-details__item">
              { orderItem.item }
            </section>
            <section className="customer-order-details__description">
              { orderItem.title }
            </section>
            <section className="customer-order-details__quantity">
              { orderItem.quantity }
            </section>
            <section className="customer-order-details__price">
              { `R$ ${orderItem.price.toFixed(2)}` }
            </section>
            <section className="customer-order-details__subtotal">
              { `R$ ${orderItem.subtotal.toFixed(2)}` }
            </section>
          </main>))}
      </main>
    </main>
  );
}
