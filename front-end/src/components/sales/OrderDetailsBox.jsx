import React from 'react';
import PropTypes from 'prop-types';
import OrderDetailsRow from './OrderDetailsRow';
import { ContainerBox, ContainerTable } from '../../styles/orderDetails';

const DIGITS = -4;

const OrderDetailsBox = ({ orderDetails }) => (
  <ContainerTable>
    <ContainerBox>
      <div>
        <span>Pedido</span>
        <span data-testid="seller_order_details__element-order-details-label-order-id">
          {`000${orderDetails.id}`.slice(DIGITS)}
        </span>
        <span data-testid="seller_order_details__element-order-details-label-order-date">
          {orderDetails.sale_date.split('T')[0]}
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {orderDetails.status}
        </span>
      </div>
      <div>
        <button data-testid="seller_order_details__button-preparing-check" type="button">
          Preparar Pedido
        </button>
        <button data-testid="seller_order_details__button-dispatch-check" type="button">
          Saiu para entrega
        </button>
      </div>
    </ContainerBox>
    <OrderDetailsRow products={ orderDetails.products } />
  </ContainerTable>
);

OrderDetailsBox.propTypes = {
  orderDetails: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OrderDetailsBox;
