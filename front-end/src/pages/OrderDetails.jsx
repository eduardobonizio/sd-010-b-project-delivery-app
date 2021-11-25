import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import { useParams } from 'react-router';
import NavBar from '../components/Navbar';
import getOrderDetails from '../services/apis/getOrderDetails';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';
import * as T from '../styles/Table';
import * as P from '../styles/PageOrderDetails';
import formatDate from '../services/helpers/formatDate';

// Definição de constantes
const ID_ORDER = '_order_details__element-order-details-label-order-id';
const NAME_SELLER = '_order_details__element-order-details-label-seller-name';
const ORDER_DATE = '_order_details__element-order-details-label-order-date';
const STATUS = '_order_details__element-order-details-label-delivery-status';
const CHECK_STAUS = '_order_details__button-delivery-check';
const ITEM = '_order_details__element-order-table-item-number-'; // index
const NAME = '_order_details__element-order-table-name-'; // index
const QUANTITY = '_order_details__element-order-table-quantity-'; // index
const SUB_TOTAL = '_order_details__element-order-table-sub-total-'; // index
const UNIT_PRICE = '_order_details__element-order-table-unit-price-'; // index
const TOTAL_PRICE = '_order_details__element-order-total-price';
const PREPARING_CHECK = '_order_details__button-preparing-check';
const DISPACH_CHECK = '_order_details__button-dispatch-check';
const DEFAULT_DATA_PRODUCTS = {
  seller: { name: '' },
  productsSold: [],
  user: { name: '' },
  sale_date: '',
  total_price: '',
};

function OrderDetails() {
  const [productsDetails, setProductsDetails] = useState(DEFAULT_DATA_PRODUCTS);
  const { idVenda } = useParams();
  const { token, role } = getFromLocalStorage('user');
  const socket = io('http://localhost:3001');

  useEffect(() => {
    (async () => {
      const response = await getOrderDetails(token, idVenda);
      if (!response.erro) setProductsDetails(response);
    })();
  }, [idVenda, token]);

  // components
  const theadOrderDetails = () => (
    <T.tr>
      <T.th>Item</T.th>
      <T.th>Descrição</T.th>
      <T.th>Quantidade</T.th>
      <T.th>Valor Unitário</T.th>
      <T.th>Sub-total</T.th>
    </T.tr>
  );

  const tbodyOrderDetails = (productsSolded) => productsSolded.map(
    ({ name, SalesProduct: { quantity }, price }, index) => (
      <T.tr key={ index }>
        <T.td data-testid={ role + ITEM + index }>{index + 1}</T.td>
        <T.td data-testid={ role + NAME + index }>{name}</T.td>
        <T.td data-testid={ role + QUANTITY + index }>{quantity}</T.td>
        <T.td data-testid={ role + UNIT_PRICE + index }>{price.replace('.', ',')}</T.td>
        <T.td data-testid={ role + SUB_TOTAL + index }>{quantity * price}</T.td>
      </T.tr>
    ),
  );

  const sellerNameComponente = () => (
    <div className="pessoa-vendedora">
      <span>Vendedor:</span>
      <span data-testid={ role + NAME_SELLER }>
        { productsDetails.seller.name }
      </span>
    </div>
  );

  const changeStatus = (status) => {
    socket.emit('preparando', { idVenda, status });
  };

  socket.on('preparandoPedido', (data) => {
    setProductsDetails({ ...productsDetails, status: data[1] });
  });

  const buttonPreparingCheck = () => (
    <div className="button-preparing-check">
      <button
        type="button"
        data-testid={ role + PREPARING_CHECK }
        disabled={ productsDetails.status !== 'Pendente'
        || productsDetails.status === 'Entregue' }
        onClick={ () => changeStatus('Preparando') }
      >
        PREPARAR PEDIDO
      </button>
    </div>
  );

  const buttonDeliveryCheck = () => (
    <div className="button-check-status">
      <button
        type="button"
        disabled={ productsDetails.status !== 'Em Trânsito' }
        data-testid={ role + CHECK_STAUS }
        onClick={ () => changeStatus('Entregue') }
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );

  const buttonDispachCheck = () => (
    <div className="button-dispatch-check">
      <button
        type="button"
        disabled={ productsDetails.status !== 'Preparando' }
        data-testid={ role + DISPACH_CHECK }
        onClick={ () => changeStatus('Em Trânsito') }
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );

  return (
    <P.divPageOrderDetails>
      <NavBar />

      <P.divOrderDetail>
        <div className="pedito-id">
          <span>pedido:</span>
          <span data-testid={ role + ID_ORDER }>{ productsDetails.id }</span>
        </div>
        {role !== 'seller' ? sellerNameComponente() : ''}
        <div className="pedido-data">
          <span data-testid={ role + ORDER_DATE }>
            { formatDate(productsDetails.sale_date) }
          </span>
        </div>
        <div className="pedido-status">
          <span data-testid={ role + STATUS }>{ productsDetails.status }</span>
        </div>
        {role === 'seller' ? buttonPreparingCheck() : ''}
        {role === 'seller' ? buttonDispachCheck() : buttonDeliveryCheck()}
      </P.divOrderDetail>

      <div>
        <T.table>
          <T.thead>
            {theadOrderDetails()}
          </T.thead>
          <T.tbody>
            {tbodyOrderDetails(productsDetails.productsSold)}
          </T.tbody>
        </T.table>
      </div>

      {/* Não sei onde esta o data-testId 46 */}
      <P.divTotalPrice>
        <span>Total:</span>
        <span data-testid={ role + TOTAL_PRICE }>
          {productsDetails.total_price.replace('.', ',')}
        </span>
      </P.divTotalPrice>

    </P.divPageOrderDetails>
  );
}

export default OrderDetails;
