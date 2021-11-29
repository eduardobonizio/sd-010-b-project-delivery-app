import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import TopBar from '../components/navigation_bar/TopBar';
import SellerOrderCard from '../components/orders/SellerOrderCard';
import { serverUrl } from '../helpers/constants';

function ListOrders() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: {
        authorization: token,
      },
    };

    const getOrders = async () => {
      const dbOrders = await axios.get(`${serverUrl}/seller/orders`, config);
      setOrders(dbOrders.data.sales);
    };

    getOrders();
  }, []);

  return (
    <>
      <TopBar />
      <Container>
        <Row xs={ 1 } md={ 2 } sm={ 2 } className="g-2 justify-content-between">
          {
            orders && orders.map((order) => (

              <SellerOrderCard
                key={ order.id }
                id={ order.id }
                status={ order.status }
                date={ order.saleDate }
                totalPrice={ order.totalPrice }
                deliveryAddress={ order.deliveryAddress }
                deliveryNumber={ order.deliveryNumber }
              />

            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default ListOrders;
