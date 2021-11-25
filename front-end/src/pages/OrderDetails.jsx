import React from 'react';
import NavBar from '../components/NavBar';
import TotalOrderButton from '../components/Order/TotalOrderButton';
import OrderCardDetail from '../components/Order/OrdercCardDetail';

export default function OrderDetails() {
  return (
    <section>
      <div>
        <NavBar />
      </div>
      <div style={ { padding: 100 } }>
        <OrderCardDetail />
        <TotalOrderButton />
      </div>
    </section>
  );
}
