import React, { useContext } from 'react';
import MyContext from '../../context/Context';
import * as styles from './styles';
import TableCheckout from './TableCheckout';

function CheckoutSales() {
  const { totalPrice } = useContext(MyContext);
  return (
    <styles.ContainerCheckout>

      <styles.TextFinalizeOrder>
        Finalizar Pedido
      </styles.TextFinalizeOrder>

      <styles.ContainerTable>
        <TableCheckout />

        <styles.ValueTotal data-testid="customer_checkout__element-order-total-price">
          {`Total: R$ ${(totalPrice).toFixed(2).replace('.', ',')}`}
        </styles.ValueTotal>
      </styles.ContainerTable>

      <styles.TextFinalizeOrder>
        Detalhes e Endereço para Entrega
      </styles.TextFinalizeOrder>

      <styles.ContainerTable>

        <styles.InputSelectSalesman data-testid="customer_checkout__select-seller">
          <option value="1">xablau</option>
          <option value="1">xablau</option>
          <option value="1">xablau</option>
        </styles.InputSelectSalesman>

        <styles.InputAddress
          type="text"
          data-testid="customer_checkout__input-address"
        />

        <styles.InputAddressNumber
          data-testid="customer_checkout__input-addressNumber"
          type="text"
        />

        <styles.ButtonFinishOrder data-testid="customer_checkout__button-submit-order">
          FINALIZAR PEDIDO
        </styles.ButtonFinishOrder>

      </styles.ContainerTable>

    </styles.ContainerCheckout>
  );
}

export default CheckoutSales;
