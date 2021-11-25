/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Header from '../ProductsComponents/Header';
import OrderSellerCard from './OrderSellerCard';
import { Context } from '../../provider/Provider';
import { getAllOrdersBySellerId } from '../../services/api';

function OrderSeller() {
  const { setDataUser } = useContext(Context);
  const [data, setData] = useState([]);
  // antes tava sendo exportar o totalOrder e setTotalOrder, porém como eles seriam apenas o preço eu optei por troca-los

  async function getOrders() {
    const user = JSON.parse(localStorage.getItem('user'));
    setDataUser(user);
    const orders = await getAllOrdersBySellerId(user.userId);

    setData([orders]);
    console.log(orders, 'orders', data);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {
          data && data.map((order) => (
            <OrderSellerCard order={ order } key={ order.id } />
          ))
        }
      </div>
    </div>
  );
}

export default OrderSeller;
