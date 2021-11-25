import React from 'react';
import TableOrdersDetails from './TableOrdersDetails';
import * as styles from './styles';
import HeaderDetailsOrders from './HeaderDetailsOrders';

function DetailsOrders() {
  return (
    <styles.ContainerOrdersDetails>
      <styles.ContainerTable>

        <HeaderDetailsOrders />

        <TableOrdersDetails />

        <styles.ValueTotal
          data-testid="seller_order_details__element-order-total-price"
        >
          R$
        </styles.ValueTotal>
      </styles.ContainerTable>

    </styles.ContainerOrdersDetails>
  );
}

export default DetailsOrders;
