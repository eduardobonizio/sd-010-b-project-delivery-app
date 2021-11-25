import React from 'react';
import NavBar from '../components/NavBar';

function SellerOrders() {
  return (
    <>
      <NavBar />
      <div className="seller-orders">
        <p data-testid="seller_orders__element-order-id-[id]>">Pedido [id do pedido]</p>
        <h2 data-testid="seller_orders__element-delivery-status-[id]">
          [status do pedido]
        </h2>
        <h3 data-testid="seller_orders__element-order-date-[id]">[data do pedido]</h3>
        <h3 data-testid="seller_orders__element-card-price-[id]">
          [preço total do pedido]
        </h3>
        <p data-testid="seller_orders__element-card-address-[id]">
          [endereço do cliente]
        </p>
      </div>
    </>
  );
}

export default SellerOrders;
