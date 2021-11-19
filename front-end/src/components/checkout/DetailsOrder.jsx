import React from 'react';
import * as styles from './styles';

function DetailsOrder() {
  return (
    <styles.ContainerDetatailsOrder>

      <styles.Label>
        Vendedor(a) Responsável
        <br />
        <styles.InputSelectSalesman data-testid="customer_checkout__select-seller">
          <option value="1">xablau</option>
          <option value="1">xablau</option>
          <option value="1">xablau</option>
        </styles.InputSelectSalesman>
      </styles.Label>

      <styles.Label>
        Endereço
        <br />
        <styles.InputAddress
          type="text"
          data-testid="customer_checkout__input-address"
          placeholder="Ex: Avenida Paulista"
        />
      </styles.Label>

      <styles.Label>
        Número
        <br />
        <styles.InputAddressNumber
          data-testid="customer_checkout__input-addressNumber"
          type="text"
          placeholder="Ex: 2500"
        />
      </styles.Label>

      <styles.ButtonFinishOrder data-testid="customer_checkout__button-submit-order">
        FINALIZAR PEDIDO
      </styles.ButtonFinishOrder>

    </styles.ContainerDetatailsOrder>
  );
}

export default DetailsOrder;
