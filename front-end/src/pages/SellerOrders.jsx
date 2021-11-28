import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import TopBar from '../components/navigation_bar/TopBar';
import SellerOrderCard from '../components/SellerOrderCard';
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
      <Container fluid>
        <Row>
          {
            orders && orders.map((order) => (
              <Col key={ order.id }>
                <SellerOrderCard
                  id={ order.id }
                  status={ order.status }
                  date={ order.saleDate }
                  totalPrice={ order.totalPrice }
                  deliveryAddress={ order.deliveryAddress }
                  deliveryNumber={ order.deliveryNumber }
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default ListOrders;
