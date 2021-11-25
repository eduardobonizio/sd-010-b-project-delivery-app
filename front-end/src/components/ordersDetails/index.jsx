import React, { useContext } from 'react';
import TableOrdersDetails from './TableOrdersDetails';
import * as styles from './styles';
import HeaderDetailsOrders from './HeaderDetailsOrders';
import MyContext from '../../context/Context';

function DetailsOrders() {
  const { salleProduct } = useContext(MyContext);

  return (
    <styles.ContainerOrdersDetails>
      <styles.ContainerTable>

        <HeaderDetailsOrders />

        <TableOrdersDetails />

        {
          salleProduct.map((value, index) => (
            <styles.ValueTotal
              key={ index }
              data-testid="seller_order_details__element-order-total-price"
            >
              Total: R$
              {(Number(value.totalPrice)).toFixed(2).replace('.', ',')}

            </styles.ValueTotal>
          ))
        }

      </styles.ContainerTable>

    </styles.ContainerOrdersDetails>
  );
}

export default DetailsOrders;
