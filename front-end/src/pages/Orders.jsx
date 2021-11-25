import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarClient from '../components/Navbar/navbarClientComponent';
import OrderCard from '../components/sales/OrderCard';
import { Container } from '../styles/orders';
import '../styles/navBarClient.css';
import '../styles/listProducts.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then((response) => response.json())
      .then((ordersDB) => {
        console.log(ordersDB);
        setOrders(ordersDB);
      });
  }, []);

  return (
    <>
      <header>
        <NavbarClient />
      </header>
      <Container>
        {orders.length > 0 && orders.map((order) => {
          console.log(order);
          return (
            <Link key={ order.id } to={ `/seller/orders/${order.id}` }>
              <OrderCard order={ order } />
            </Link>
          );
        })}
      </Container>
    </>
  );
};

export default Orders;
