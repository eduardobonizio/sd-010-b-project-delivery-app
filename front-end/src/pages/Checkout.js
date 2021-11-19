import React from 'react';

import NavBar from '../components/navBar';
import OrderCheckout from '../components/orderCheckout';
import DeliveryDetails from '../components/deliveryDetails';

export default function Checkout() {
  return (
    <div>
      <NavBar isCustomer nameButtonOrder="Meus Pedidos" linkOrder="/customer/orders" />
      <div className="max-w-full">
        <OrderCheckout />
        <DeliveryDetails />
      </div>
    </div>
  );
}
