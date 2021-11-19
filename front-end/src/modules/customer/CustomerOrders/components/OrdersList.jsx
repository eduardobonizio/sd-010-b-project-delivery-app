import React, { useEffect } from 'react';
import OrderCard from '../../../../components/OrderCard';
import { useOrder } from '../../../../hooks/useOrder';
// import api from '../../../../services/api';

const testOrders = [
  { id: 1, status: 'Pendente', date: new Date(), price: 55.60 },
  { id: 2, status: 'Entregue', date: new Date(), price: 35.60 },
  { id: 3, status: 'Pendente', date: new Date(), price: 58.83 },
  { id: 4, status: 'Em andamento', date: new Date(), price: 15.45 },
];

export default function OrdersList() {
  const { customerOrders, setCustomerOrders } = useOrder();

  useEffect(() => {
    // const response = api.get('/');
    setCustomerOrders(testOrders);
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {customerOrders.map((order) => <OrderCard key={ order.id } order={ order } />)}
    </div>
  );
}
