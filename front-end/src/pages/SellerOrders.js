import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import StatusCard from '../components/statusCard';
import fetchGetSales from '../services/salesAPI';

export default function SellerOrders() {
  const [allOrders, setAllOrders] = useState([]);
  const [dataTestIds] = useState([
    'seller_orders__element-order-id-',
    'seller_orders__element-delivery-status-',
    'seller_orders__element-order-date-',
    'seller_orders__element-card-price-',
    'seller_orders__element-card-address-',
  ]);

  useEffect(() => {
    // Apagar isso depois...
    const arrayExemplo = [
      {
        id: 1,
        user_id: 2,
        seller_id: 2,
        total_price: 16.20,
        delivery_address: 'Avenida Não sei De Onde',
        delivery_number: '30',
        sale_date: '02/11/2011',
        status: 'Pendente',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 23.80,
        delivery_address: 'Avenida Não sei De Onde 1',
        delivery_number: '30',
        sale_date: '02/11/2010',
        status: 'Entregue',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 23.80,
        delivery_address: 'Avenida Não sei De Onde 2',
        delivery_number: '30',
        sale_date: '02/11/2010',
        status: 'Entregue',
      },
    ];

    const getAllSales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await fetchGetSales({ id: user.id });

      if (res.message) {
        console.log(res);
        // Apagar isso depois...
        setAllOrders([...arrayExemplo]);
      } else {
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
              arrayDataTestid={ dataTestIds }
              linkDetail="/seller/orders"
              key={ index }
            />
          ))}
      </div>
    </div>
  );
}
