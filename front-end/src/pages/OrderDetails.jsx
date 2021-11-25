import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarClient from '../components/Navbar/navbarClientComponent';
import OrderDetailsBox from '../components/sales/OrderDetailsBox';
import { Container, ContainerTable } from '../styles/orderDetails';
import '../styles/navBarClient.css';
// import OrderCard from '../components/sales/OrderCard';

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/orders/${id}`)
      .then((response) => response.json())
      .then((order) => {
        console.log(order);
        setOrderDetails(order);
      });
  }, [id]);

  return (
    <>
      <header>
        <NavbarClient />
      </header>
      <Container>
        <ContainerTable>Detalhe do pedido</ContainerTable>
        {orderDetails.id && <OrderDetailsBox orderDetails={ orderDetails } />}
      </Container>
    </>
  );
};

export default OrderDetails;
