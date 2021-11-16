import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import StatusCard from '../components/statusCard';
import { fetchGetSalesByIdSeller } from '../services/saleAPI';

export default function SellerOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const getAllSales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await fetchGetSalesByIdSeller({ id: user.id });

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
      <NavBar isCustomer={ false } nameButtonOrder="Pedidos" linkOrder="/seller/orders" />
      <div>
        {allOrders.length !== 0
          && allOrders.map((el, index) => (
            <StatusCard
              order={ el }
              type="seller"
              linkDetail="/seller/orders"
              key={ index }
            />
          ))}
      </div>
    </div>
  );
}
