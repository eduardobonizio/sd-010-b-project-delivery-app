import React from 'react';
import PropTypes from 'prop-types';
// import Context from '../context/Context';

function DetailsAddress({ sellers }) {
  console.log(sellers);
  return (
    <div>
      <span>P. Vendedora responsavel</span>
      <select>
        {sellers.map((seller, index) => <option key={ index }>{seller}</option>)}
      </select>
      <span>Endereço</span>
      <input type="text" name="endereco" />
      <span>Numero</span>
      <input type="text" name="numero" />
      <button type="button">Finalizar Pedido</button>
    </div>
  );
}

DetailsAddress.propTypes = {
  sellers: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default DetailsAddress;
