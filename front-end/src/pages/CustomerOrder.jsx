import React from 'react';
import NavBar from '../components/NavBar';
import OrdersCard from '../components/Order/OrderCard';
import TotalOrderButton from '../components/Order/TotalOrderButton';

export default function CustomerOrder() {
  return (
    <section>
      <div>
        <NavBar />
      </div>
      <div style={ { padding: 80 } }>
        <OrdersCard />
        <TotalOrderButton />
      </div>
    </section>
  );
}
