import React, { useContext } from 'react';
import MyContext from '../../context/Context';
import formatDate from '../../helpers/formatDate';
import * as styles from './styles';

function HeaderDetailsOrders() {
  const { salleProduct } = useContext(MyContext);

  const datatestId = {
    orderId: 'seller_order_details__element-order-details-label-order-id',
    orderDate: 'seller_order_details__element-order-details-label-order-date',
    status: 'seller_order_details__element-order-details-label-delivery-status',
    preparingCheck: 'seller_order_details__button-preparing-check',
    dispatchCheck: 'seller_order_details__button-dispatch-check',
  };

  return (
    <styles.ContainerHeaderDetails>
      {
        salleProduct.map((value) => (
          <>
            <styles.TextNumberOrder
              data-testid={ datatestId.orderId }
            >
              {`PEDIDO 00${value.id}`}
            </styles.TextNumberOrder>

            <styles.TextDateOrder
              data-testid={ datatestId.orderDate }
            >
              {formatDate(value.saleDate)}
            </styles.TextDateOrder>

            <styles.TextStatusOrder
              data-testid={ datatestId.status }
            >
              {value.status}
            </styles.TextStatusOrder>

            <styles.ButtonPreparing
              type="button"
              disabled={ value.status !== 'Pendente' }
              data-testid={ datatestId.preparingCheck }
            >
              PREPARAR PEDIDO
            </styles.ButtonPreparing>

            <styles.ButtonDispatch
              type="button"
              disabled={ value.status !== 'Preparando' }
              data-testid={ datatestId.dispatchCheck }
            >
              SAIU PARA ENTREGA
            </styles.ButtonDispatch>
          </>
        ))
      }
    </styles.ContainerHeaderDetails>
  );
}

export default HeaderDetailsOrders;
