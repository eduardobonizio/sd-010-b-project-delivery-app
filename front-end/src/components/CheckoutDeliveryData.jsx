import React from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import Proptypes from 'prop-types';

function CheckoutDeliveryData(props) {
  const { finishSale } = props;

  return (
    <Container>
      <div className="d-flex" style={ { fontSize: '11px' } }>
        {/* title */}
        <Dropdown>
          <div>
            <span>
              P. Vendedora Responsável:
            </span>
          </div>

          <select name="select" data-testid="customer_checkout__select-seller">
            <option value="valor1" selected>Fulana pereira</option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>
        </Dropdown>
        <Form.Label>
          Endereço
          <Form.Control
            placeholder="Travessa teceira da Castanheira, Bairro Murici"
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ () => {
            // setStatePassword(e.target.value);
            } }
          />
        </Form.Label>
        <Form.Label>
          Número
          <Form.Control
            placeholder="198"
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            onChange={ () => {
            // setStatePassword(e.target.value);
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
        {console.log(typeof finishSale)}
        FINALIZAR PEDIDO
      </button>
    </Container>
  );
}

export default CheckoutDeliveryData;

CheckoutDeliveryData.propTypes = {
  finishSale: Proptypes.func.isRequired,
};
