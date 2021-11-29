import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import TopBar from '../components/navigation_bar/TopBar';
import OrderDetailsTable from '../components/OrderDetailsTable';
import { serverUrl } from '../helpers/constants';

function Products() {
  const [preparing, setPreparing] = useState(false);
  const [orderStatus, setOrderStatus] = useState('Pendente');
  const [order, setOrder] = useState();
  const [cartTotal, setCartTotal] = useState(0);
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

  if (order) {
    const endArraySlice = 4;
    const dateArray = order.saleDate.split('-');
    const day = `${dateArray[2][0]}${dateArray[2][1]}`;
    const month = `${dateArray[1][0]}${dateArray[1][1]}`;
    const year = `${dateArray[0].slice(0, endArraySlice)}`;
    const formattedDate = `${day}/${month}/${year}`;
    const label = 'customer_order_details__element-order-details-label-delivery-status';

    const tyTrybe = 'customer_order_details__element-order-details-label-seller-name';
    return (
      <>
        <TopBar cartTotal={ cartTotal } />
        <Container>
          <p>Detalhe do pedido</p>
          <div>
            <span
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              Pedido
              { order.id }
            </span>
            <span
              data-testid={ tyTrybe }
            >
              P. Vendedora:
              { order.seller.name }
            </span>
            <span
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              { formattedDate }
            </span>
            <span
              data-testid={ label }
            >
              { orderStatus }
            </span>
            <button
              data-testid="customer_order_details__button-delivery-check"
              type="button"
              disabled={ orderStatus !== 'Em Trânsito' }
              onClick={ () => updateButtonsText('Entregue') }
            >
              MARCAR COMO ENTREGUE
            </button>
            <OrderDetailsTable order={ order.products } />
            <span>Total: R$</span>
            <span
              data-testid="customer_order_details__element-order-total-price"
            >
              { order.totalPrice.split('.').join(',') }
            </span>
          </div>
        </Container>
      </>
    );
  }
  return (<p>Carregando</p>);
}

export default Products;
