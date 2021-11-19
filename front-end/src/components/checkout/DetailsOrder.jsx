import React, { useState } from 'react';
import * as styles from './styles';

function DetailsOrder() {
  const [detailsSales, setDetailsSales] = useState(
    { seller: 'Vendedor 1', address: '', number: 0 },
  );

  function handleOnchangeDetailsSales(event) {
    const { name, value } = event.target;
    setDetailsSales({
      ...detailsSales,
      [name]: value,
    });
  }

  return (
    <styles.ContainerDetatailsOrder>
      <styles.Form>

        <styles.Label>
          Vendedor(a) Responsável
          <br />
          <styles.InputSelectSalesman
            id="seller"
            name="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ handleOnchangeDetailsSales }
          >
            <option value="Vendedor 1">Vendedor 1</option>
            <option value="Vendedor 2">Vendedor 2</option>
            <option value="Vendedor 3">Vendedor 3</option>
          </styles.InputSelectSalesman>
        </styles.Label>

        <styles.Label>
          Endereço
          <br />
          <styles.InputAddress
            name="address"
            type="text"
            value={ detailsSales.address }
            data-testid="customer_checkout__input-address"
            placeholder="Ex: Avenida Paulista"
            onChange={ handleOnchangeDetailsSales }
          />
        </styles.Label>

        <styles.Label>
          Número
          <br />
          <styles.InputAddressNumber
            name="number"
            value={ detailsSales.nunber }
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            placeholder="Ex: 2500"
            onChange={ handleOnchangeDetailsSales }
          />
        </styles.Label>

        <styles.ButtonFinishOrder data-testid="customer_checkout__button-submit-order">
          FINALIZAR PEDIDO
        </styles.ButtonFinishOrder>

      </styles.Form>

    </styles.ContainerDetatailsOrder>
  );
}

export default DetailsOrder;
