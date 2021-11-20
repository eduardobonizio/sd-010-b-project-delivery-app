import React from 'react';
import DeliveryDetails from '../components/Checkout/DeliveryDetails';
import OrdersItemsTable from '../components/Checkout/OrderItemsTable';
import Header from '../components/Header';
import '../styles/Checkout.css';

function Checkout() {
  return (
    <>
      <Header userRole="customer" />
      <div className="checkout-container">
        <div className="checkout-orders">
          <h3>Finalizar pedido</h3>
          <OrdersItemsTable />
        </div>
        <div className="order-address">
          <h3>Detalhes e Endereço para Entrega</h3>
          <DeliveryDetails />
        </div>
      </div>
    </>
  );
}

export default Checkout;
