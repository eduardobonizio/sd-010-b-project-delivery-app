import React, { useContext, useEffect } from 'react';
import Header from '../ProductsComponents/Header';
import OrderSellerCard from './OrderSellerCard';

function OrderSeller() {
  const { setDataUser, setTotalOrders, totalOrders } = useContext(Context);

  async function getOrders() {
    const user = JSON.parse(localStorage.getItem('user'));
    setDataUser(user);
    const orders = await getAllOrdersBySellerId(user.userId);
    setTotalOrders(orders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {
          totalOrders.map((order) => (
            <OrderSellerCard order={ order } key={ order.id } />
          ))
        }
      </div>
    </div>
  );
}

export default OrderSeller;
