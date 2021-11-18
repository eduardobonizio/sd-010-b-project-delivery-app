import React, { useEffect } from 'react';
import Aos from 'aos';

import Menu from '../components/menu';
import NavBar from '../components/navBar';
import 'aos/dist/aos.css';

export default function Products() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <NavBar isCustomer nameButtonOrder="Meus Pedidos" linkOrder="/customer/orders" />
      <Menu />
    </>
  );
}
