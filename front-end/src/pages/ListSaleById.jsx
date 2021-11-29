import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import TopBar from '../components/navigation_bar/TopBar';
import OrderDetailsTable from '../components/order_details/OrderDetailsTable';
import { serverUrl } from '../helpers/constants';
import OrderStatusHeader from '../components/order_details/OrderStatusHeader';
import useWindowSize from '../helpers/getWindowSize';
import CardOrderStatusHeader from '../components/order_details/CardOrderStatusHeader';
import CardOrderDetailsTable from '../components/order_details/CardOrderDetailsTable';

function Products() {
  const [preparing, setPreparing] = useState(false);
  const [orderStatus, setOrderStatus] = useState('Pendente');
  const [order, setOrder] = useState();
  const [cartTotal, setCartTotal] = useState(0);
  const history = useHistory();
  const { width } = useWindowSize();
  const minWidthToShow = 800;
  const showMobileCards = width < minWidthToShow;

  useEffect(() => {
    const historyArray = history.location.pathname.split('/');
    const orderId = historyArray[historyArray.length - 1];
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: {
        authorization: token,
      },
    };

    const getOrder = async () => {
      const myOrder = await axios.get(`${serverUrl}/customer/order/${orderId}`, config);
      setOrder(myOrder.data.order);
      setOrderStatus(myOrder.data.order.status);
    };

    getOrder();
  }, [history.location.pathname]);

  const updateButtonsText = async (status) => {
    const historyArray = history.location.pathname.split('/');
    const orderId = historyArray[historyArray.length - 1];
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: {
        authorization: token,
      },
    };

    axios.post(`${serverUrl}/seller/orders/${orderId}`, { orderStatus: status }, config);

    setPreparing(!preparing);
    setOrderStatus(status);
  };

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

  if (showMobileCards) {
    return (
      <>
        <TopBar cartTotal={ cartTotal } />
        {order
        && (
          <Container>
            <p>Detalhe do pedido</p>
            <CardOrderStatusHeader
              orderId={ order.id }
              sellerName={ order.seller.name }
              orderStatus={ orderStatus }
              updateButtonsText={ updateButtonsText }
              saleDate={ order.saleDate }
            />
            <CardOrderDetailsTable
              products={ order.products }
              totalPrice={ order.totalPrice }
            />
          </Container>)}
      </>
    );
  }

  return (
    <>
      <TopBar cartTotal={ cartTotal } />
      {order
      && (
        <Container>
          <p>Detalhe do pedido</p>
          <OrderStatusHeader
            orderId={ order.id }
            sellerName={ order.seller.name }
            orderStatus={ orderStatus }
            updateButtonsText={ updateButtonsText }
            saleDate={ order.saleDate }
          />
          <OrderDetailsTable
            products={ order.products }
            totalPrice={ order.totalPrice }
          />
        </Container>)}
    </>
  );
}

export default Products;
