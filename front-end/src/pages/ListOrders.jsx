import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import TopBar from '../components/TopBar';
import OrderCard from '../components/OrderCard';
import './css/Products.css';
import { serverUrl } from '../helpers/constants';

function ListOrders() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [orders, setOrders] = useState();

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: {
        authorization: token,
      },
    };

    const getOrders = async () => {
      const dbOrders = await axios.get(`${serverUrl}/customer/orders`, config);
      setOrders(dbOrders.data);
    };

    getOrders();
  }, []);

  return (
    <>
      <TopBar name={ name } />
      <Container fluid>
        <Row>
          {
            orders && orders.map((order) => (
              <Col key={ order.id } style={ { padding: '0px', margin: '0px' } }>
                <OrderCard
                  id={ order.id }
                  status={ order.status }
                  date={ order.saleDate }
                  totalPrice={ order.totalPrice }
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
