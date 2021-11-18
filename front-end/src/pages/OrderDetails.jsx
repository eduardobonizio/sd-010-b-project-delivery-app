import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import NavBar from '../components/Navbar';
import getOrderDetails from '../services/apis/getOrders';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';
import * as C from '../styles/Table';
// import * as P from '../styles/PageOrderDetails';

// Definição de constantes
const ID_ORDER = 'customer_order_details__element-order-details-label-order-id';
const NAME_SELLER = 'customer_order_details__element-order-details-label-seller-name';
const ORDER_DATE = 'customer_order_details__element-order-details-label-order-date';
const STATUS = 'customer_order_details__element-order-details-label-delivery-status';
const CHECK_STAUS = 'customer_order_details__button-delivery-check';
const DEFAULT_DATA_PRODUCTS = {
  seller: { name: '' },
  productsSold: [],
  user: { name: '' },
};

function OrderDetails() {
  const [productsDetails, setProductsDetails] = useState(DEFAULT_DATA_PRODUCTS);
  const { idVenda } = useParams();
  const { token } = getFromLocalStorage('user');

  console.log(productsDetails);

  useEffect(() => {
    (async () => {
      const response = await getOrderDetails(token, idVenda);
      setProductsDetails(response);
    })();
  }, [idVenda, token]);

  // components
  const theadOrderDetails = () => (
    <C.thead>
      <C.tr>
        <C.th>Item</C.th>
        <C.th>Descrição</C.th>
        <C.th>Quantidade</C.th>
        <C.th>Valor Unitário</C.th>
        <C.th>Sub-total</C.th>
      </C.tr>
    </C.thead>
  );

  return (
    <div className="order-details">
      <NavBar />

      <div>
        <div className="pedito-id">
          <span>pedido:</span>
          <span data-testid={ ID_ORDER }>{ productsDetails.id }</span>
        </div>
        <div className="pessoa-vendedora">
          <span>Vendedor:</span>
          <span data-testid={ NAME_SELLER }>
            { productsDetails.seller.name }
          </span>
        </div>
        <div className="pedido-data">
          <span data-testid={ ORDER_DATE }>{ productsDetails.sale_date }</span>
        </div>
        <div className="pedido-status">
          <span data-testid={ STATUS }>{ productsDetails.status }</span>
        </div>
        <div className="button-check-status">
          <button
            type="button"
            data-testid={ CHECK_STAUS }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      </div>

      <div>
        <C.table>
          {theadOrderDetails()}

        </C.table>
      </div>

    </div>
  );
}

export default OrderDetails;
