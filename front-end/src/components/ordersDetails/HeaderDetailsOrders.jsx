import React from 'react';
import * as styles from './styles';

function HeaderDetailsOrders() {
  return (
    <styles.ContainerHeaderDetails>
      <styles.TextNumberOrder
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        PEDIDO
      </styles.TextNumberOrder>

      <styles.TextDateOrder
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        DATA
      </styles.TextDateOrder>

      <styles.ContainerStatusOrder>
        <styles.TextStatusOrder
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          STATUS
        </styles.TextStatusOrder>
      </styles.ContainerStatusOrder>

      <styles.ButtonPreparing
        data-testid="seller_order_details__button-preparing-check"
      >
        PREPARAR PEDIDO
      </styles.ButtonPreparing>

      <styles.ButtonDispatch
        data-testid="seller_order_details__button-dispatch-check"
      >
        SAIU PARA ENTREGA
      </styles.ButtonDispatch>

    </styles.ContainerHeaderDetails>
  );
}

export default HeaderDetailsOrders;
