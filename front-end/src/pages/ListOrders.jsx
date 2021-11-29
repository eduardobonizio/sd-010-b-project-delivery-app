import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import TopBar from '../components/navigation_bar/TopBar';
import OrderCard from '../components/orders/OrderCard';
import { serverUrl } from '../helpers/constants';

function ListOrders() {
  const [orders, setOrders] = useState();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: {
        authorization: token,
      },
    };

    const getOrders = async () => {
      const dbOrders = await axios.get(`${serverUrl}/customer/order`, config);
      setOrders(dbOrders.data);
    };

    getOrders();
  }, []);

  useEffect(() => {
    let sum = 0;
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      cart.forEach((element) => {
        sum += element.price * element.quantity;
      });
    }
    setCartTotal(sum);
  }, []);

  return (
    <>
      <TopBar cartTotal={ cartTotal } />
      <Container>
        <Row xs={ 2 } md={ 2 } sm={ 2 } className="g-2 justify-content-between">
          {
            orders && orders.map((order) => (
              <OrderCard
                key={ order.id }
                id={ order.id }
                status={ order.status }
                date={ order.saleDate }
                totalPrice={ order.totalPrice }
              />
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default ListOrders;
