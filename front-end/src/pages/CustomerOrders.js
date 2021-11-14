import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import StatusCard from '../components/statusCard';
import { fetchGetSalesByIdCustomer } from '../services/saleAPI';

export default function CustomerOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const getAllSales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await fetchGetSalesByIdCustomer({ id: user.id });

      if (res.message) {
        console.log(res);
      } else {
        console.log(res);
        setAllOrders([...res]);
      }
    };

    getAllSales();
  }, []);

  return (
    <div>
      <NavBar isCustomer nameButtonOrder="Meus Pedidos" linkOrder="/customer/orders" />
      <div>
        {allOrders.length !== 0
          && allOrders.map((el, index) => (
            <StatusCard
              order={ el }
              type="customer"
              linkDetail="/customer/orders"
              key={ index }
            />
          ))}
      </div>
    </div>
  );
}
