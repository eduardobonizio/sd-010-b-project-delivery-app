import React from 'react';
import Proptypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './css/OrderDetailsTable.css';

function OrderStatusHeader({ updateButtonsText, orderId,
  sellerName, orderStatus, saleDate }) {
  const endArraySlice = 4;
  const dateArray = saleDate.split('-');
  const day = `${dateArray[2][0]}${dateArray[2][1]}`;
  const month = `${dateArray[1][0]}${dateArray[1][1]}`;
  const year = `${dateArray[0].slice(0, endArraySlice)}`;
  const formattedDate = `${day}/${month}/${year}`;
  const label = 'customer_order_details__element-order-details-label-delivery-status';

  const tyTrybe = 'customer_order_details__element-order-details-label-seller-name';
  const s2BigNames = 'customer_order_details__element-order-details-label-order-date';

  return (
    <Table responsive hover className="table-head-format">
      <tr>
        <th
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          { `Pedido ${orderId}` }
        </th>
        <th
          data-testid={ tyTrybe }
        >
          { `P. Vend: ${sellerName}` }
        </th>
        <th
          data-testid={ s2BigNames }
        >
          { formattedDate }
        </th>
        <th
          data-testid={ label }
        >
          { orderStatus }
        </th>
        <th>
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            disabled={ orderStatus !== 'Em Trânsito' }
            onClick={ () => updateButtonsText('Entregue') }
          >
            MARCAR COMO ENTREGUE
          </button>
        </th>
      </tr>
    </Table>
  );
}

OrderStatusHeader.propTypes = {
  updateButtonsText: Proptypes.func.isRequired,
  orderId: Proptypes.string.isRequired,
  sellerName: Proptypes.string.isRequired,
  orderStatus: Proptypes.string.isRequired,
  saleDate: Proptypes.string.isRequired,
};

export default OrderStatusHeader;
