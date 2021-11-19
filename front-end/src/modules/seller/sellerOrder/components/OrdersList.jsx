import React, { useEffect } from 'react';
import OrderCard from './OrderCard';
import { useOrder } from '../../../../hooks/useOrder';
// import api from '../../../../services/api';

const testOrders = [
  { id: 1, status: 'Pendente', date: new Date(), price: 55.60, address: 'Rua lá, 90' },
  { id: 2, status: 'Entregue', date: new Date(), price: 35.60, address: 'Rua lág, 90' },
  { id: 3, status: 'Pendente', date: new Date(), price: 58.83, address: 'Rua lád, 90' },
];

export default function OrdersList() {
  const { sellerOrders, setSellerOrders } = useOrder();

  useEffect(() => {
    // const response = api.get('/');
    setSellerOrders(testOrders);
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {sellerOrders.map((order) => <OrderCard key={ order.id } order={ order } />)}
    </div>
  );
}
