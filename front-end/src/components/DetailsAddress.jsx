import React from 'react';
import PropTypes from 'prop-types';
// import Context from '../context/Context';

const SELECT_SELLER = 'customer_checkout__select-seller';
const INPUT_ADDRESS = 'customer_checkout__input-address';
const INPUT_NUMBER = 'customer_checkout__input-addressNumber';
const SUBMIT_ORDER = 'customer_checkout__button-submit-order';

function DetailsAddress({ sellers }) {
  // console.log(sellers);
  return (
    <form>
      <span>P. Vendedora responsavel</span>
      <select data-testid={ `${SELECT_SELLER}` }>
        {sellers.map((seller, index) => <option key={ index }>{seller}</option>)}
      </select>
      <span>Endereço</span>
      <input data-testid={ `${INPUT_ADDRESS}` } type="text" name="endereco" />
      <span>Numero</span>
      <input data-testid={ `${INPUT_NUMBER}` } type="text" name="numero" />
      <button data-testid={ `${SUBMIT_ORDER}` } type="submit">Finalizar Pedido</button>
    </form>
  );
}

DetailsAddress.propTypes = {
  sellers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  ).isRequired };

export default DetailsAddress;
