import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../components/navigation_bar/TopBar';
import SellerOrderDetailsTable from '../components/SellerOrderDetailsTable';
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
    const endArraySlice = 4;
    const dateArray = order.saleDate.split('-');
    const day = `${dateArray[2][0]}${dateArray[2][1]}`;
    const month = `${dateArray[1][0]}${dateArray[1][1]}`;
    const year = `${dateArray[0].slice(0, endArraySlice)}`;
    const formattedDate = `${day}/${month}/${year}`;

    const label = 'seller_order_details__element-order-details-label-delivery-status';
    return (
      <>
        <TopBar />
        <p>Detalhe do pedido</p>
        <div>
          <span
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            Pedido
            { order.id }
          </span>
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { formattedDate }
          </span>
          <span
            data-testid={ label }
          >
            {orderStatus}
          </span>
          <button
            data-testid="seller_order_details__button-preparing-check"
            type="button"
            disabled={ orderStatus !== 'Pendente' }
            onClick={ () => updateButtonsText('Preparando') }
          >
            PREPARAR PEDIDO
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            disabled={ orderStatus !== 'Preparando' }
            onClick={ () => updateButtonsText('Em Trânsito') }
          >
            SAIU PARA ENTREGA
          </button>
          <SellerOrderDetailsTable order={ order.products } />
          <span>Total: R$</span>
          <span
            data-testid="seller_order_details__element-order-total-price"
          >
            { order.totalPrice.split('.').join(',') }
          </span>
        </div>
      </>
    );
  }
  return (<p>Carregando</p>);
}

export default ListSellerSaleById;
