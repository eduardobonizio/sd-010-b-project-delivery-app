import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import TopBar from '../components/navigation_bar/TopBar';
import SellerOrderDetailsTable from '../components/order_details/SellerOrderDetailsTable';
import SellerOrderStatusHeader from '../components/order_details/SellerOrderStatusHeader';
import { serverUrl } from '../helpers/constants';

function ListSellerSaleById() {
  const [order, setOrder] = useState();
  const [preparing, setPreparing] = useState(false);
  const [orderStatus, setOrderStatus] = useState('Pendente');
  const history = useHistory();

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
      const myOrder = await axios.get(`${serverUrl}/seller/orders/${orderId}`, config);

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

    await axios.post(
      `${serverUrl}/seller/orders/${orderId}`, { orderStatus: status }, config,
    );

    setPreparing(!preparing);
    setOrderStatus(status);
  };

  if (order) {
    return (
      <>
        <TopBar />
        <Container>
          <p>Detalhe do pedido</p>
          <SellerOrderStatusHeader
            orderId={ order.id }
            orderStatus={ orderStatus }
            updateButtonsText={ updateButtonsText }
            saleDate={ order.saleDate }
          />
          <SellerOrderDetailsTable
            products={ order.products }
            totalPrice={ order.totalPrice }
          />
        </Container>
      </>
    );
  }
  return (<p>Carregando</p>);
}

export default ListSellerSaleById;
