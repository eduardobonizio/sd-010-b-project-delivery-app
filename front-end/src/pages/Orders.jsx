import React, { useState, useEffect, useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import Context from '../context/Context';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';
import api from '../api/index';
import './Orders.css';

function Orders() {
  const { userData } = useContext(Context);

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    // const localOrders = JSON.parse(localStorage.getItem('orders'));
    try {
      const { data: sales } = await api.getSalesByUser(userData.id);
      // console.log(sales);
      setOrders(sales);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Orders">
      <NavBar />
      <h1 className="title">Meu Pedidos</h1>
      <main className="CatalogOrdes">
        {
          orders.map((order) => (
            <OrderCard key={ order.id } order={ order } />
          ))
        }
      </main>
    </div>
  );
}

export default Orders;
