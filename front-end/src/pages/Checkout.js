import React from 'react';

import NavBar from '../components/navBar';
import OrderCheckout from '../components/orderCheckout';
import DeliveryDetails from '../components/deliveryDetails';

export default function Checkout() {
  return (
    <>
      <NavBar />
      <OrderCheckout />
      <DeliveryDetails />
    </>
  );
}
