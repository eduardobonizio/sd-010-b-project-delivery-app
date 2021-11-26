import React from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import Proptypes from 'prop-types';

function CheckoutDeliveryData(props) {
  const { finishSale, setDeliveryAddress, setDeliveryNumber, setSellerId,
    sellers } = props;

  return (
    <Container>
      <div className="d-flex">
        {/* title */}
        <Dropdown>
          <div>
            <span>
              P. Vendedora Responsável:
            </span>
          </div>

          <select
            onChange={ (e) => setSellerId(e.target.value) }
            name="select"
            data-testid="customer_checkout__select-seller"
          >
            <option disabled selected value> -- Selecione -- </option>
            {sellers.map((
              { id, name }, index,
            ) => (<option key={ index } value={ id } defaultValue>{name}</option>))}
          </select>
        </Dropdown>
        <Form.Label>
          Endereço
          <Form.Control
            placeholder="Travessa Terceira da Castanheira, Bairro Murici"
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ (e) => {
              setDeliveryAddress(e.target.value);
            } }
          />
        </Form.Label>
        <Form.Label>
          Número
          <Form.Control
            placeholder="198"
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            onChange={ (e) => {
              setDeliveryNumber(e.target.value);
            } }
          />
        </Form.Label>
      </div>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        // disabled={ cartTotal <= 0 }
        onClick={ finishSale }
      >
        FINALIZAR PEDIDO
      </button>
    </Container>
  );
}

export default CheckoutDeliveryData;

CheckoutDeliveryData.propTypes = {
  finishSale: Proptypes.func.isRequired,
  setDeliveryNumber: Proptypes.func.isRequired,
  setDeliveryAddress: Proptypes.func.isRequired,
  setSellerId: Proptypes.func.isRequired,
  sellers: Proptypes.arrayOf({}).isRequired,
};
