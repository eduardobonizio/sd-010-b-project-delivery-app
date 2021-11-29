import React from 'react';
import Proptypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './css/OrderDetailsTable.css';

function SellerOrderStatusHeader({ updateButtonsText, orderId,
  orderStatus, saleDate }) {
  const endArraySlice = 4;
  const dateArray = saleDate.split('-');
  const day = `${dateArray[2][0]}${dateArray[2][1]}`;
  const month = `${dateArray[1][0]}${dateArray[1][1]}`;
  const year = `${dateArray[0].slice(0, endArraySlice)}`;
  const formattedDate = `${day}/${month}/${year}`;
  const label = 'seller_order_details__element-order-details-label-delivery-status';
  const s2BigNames = 'seller_order_details__element-order-details-label-order-date';

  return (
    <Table responsive hover className="table-head-format">
      <tr>
        <th
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          { `Pedido ${orderId}` }
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
            data-testid="seller_order_details__button-preparing-check"
            type="button"
            disabled={ orderStatus !== 'Pendente' }
            onClick={ () => updateButtonsText('Preparando') }
          >
            PREPARAR PEDIDO
          </button>
        </th>
        <th>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            disabled={ orderStatus !== 'Preparando' }
            onClick={ () => updateButtonsText('Em Trânsito') }
          >
            SAIU PARA ENTREGA
          </button>
        </th>
      </tr>
    </Table>
  );
}

SellerOrderStatusHeader.propTypes = {
  updateButtonsText: Proptypes.func.isRequired,
  orderId: Proptypes.string.isRequired,
  orderStatus: Proptypes.string.isRequired,
  saleDate: Proptypes.string.isRequired,
};

export default SellerOrderStatusHeader;
