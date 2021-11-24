import React, { useContext, useEffect } from 'react';
import MyContext from '../../context/Context';
import { getFromLocalStorage } from '../../helpers/localStorage';
import * as styles from './styles';
import TableCheckout from './TableCheckout';
import DetailsOrder from './DetailsOrder';

function CheckoutSales() {
  const { setTotalCart } = useContext(MyContext);

  const totalCartProducts = getFromLocalStorage('totalCart');

  useEffect(() => {
    setTotalCart(totalCartProducts);
  }, [setTotalCart, totalCartProducts]);

  return (
    <styles.ContainerCheckout>

      <styles.TextFinalizeOrder>
        Finalizar Pedido
      </styles.TextFinalizeOrder>

      <styles.ContainerTable>
        <TableCheckout />

        <styles.ValueTotal data-testid="customer_checkout__element-order-total-price">
          {`Total: R$ ${(totalCartProducts).toFixed(2).replace('.', ',')}`}
        </styles.ValueTotal>
      </styles.ContainerTable>

      <styles.TextFinalizeOrder>
        Detalhes e Endereço para Entrega
      </styles.TextFinalizeOrder>

      <DetailsOrder />

    </styles.ContainerCheckout>
  );
}

export default CheckoutSales;
