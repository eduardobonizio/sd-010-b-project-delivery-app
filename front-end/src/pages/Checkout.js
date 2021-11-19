import React, { useEffect } from 'react';
import Aos from 'aos';

import NavBar from '../components/navBar';
import OrderCheckout from '../components/orderCheckout';
import DeliveryDetails from '../components/deliveryDetails';
import 'aos/dist/aos.css';

export default function Checkout() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
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
