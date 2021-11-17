import React from 'react';
import NavBar from '../components/Navbar';

// Definição dos IDs
const ID_ORDER = 'customer_order_details__element-order-details-label-order-id';
const NAME_SELLER = 'customer_order_details__element-order-details-label-seller-name';
const ORDER_DATE = 'customer_order_details__element-order-details-label-order-date';
const STATUS = 'customer_order_details__element-order-details-label-delivery-status';
const CHECK_STAUS = 'customer_order_details__button-delivery-check';

function OrderDetails() {
  return (
    <div>
      <NavBar />

      <div>
        <div className="pedito-id">
          <span>pedido:</span>
          <span data-testid={ ID_ORDER }> ID </span>
        </div>
        <div className="pessoa-vendedora">
          <span>Vendedor:</span>
          <span data-testid={ NAME_SELLER }> Name </span>
        </div>
        <div className="pedido-data">
          <span data-testid={ ORDER_DATE }> data da venda </span>
        </div>
        <div className="pedido-status">
          <span data-testid={ STATUS }> status </span>
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

      <body>
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <tr>Sub-total</tr>
          </tr>
        </table>
      </body>

    </div>
  );
}

export default OrderDetails;
