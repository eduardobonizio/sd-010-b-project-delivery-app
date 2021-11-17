import React from 'react';
// import PropTypes from 'prop-types';

function DetailsAddress() {
  return (
    <div>
      <span>P. Vendedora responsavel</span>
      <select>
        <option>vendedor1</option>
        <option>vendedor2</option>
      </select>
      <span>Endereço</span>
      <input type="text" name="endereco" />
      <span>Numero</span>
      <input type="text" name="numero" />
      <button type="button">Finalizar Pedido</button>
    </div>
  );
}

// DetailsAddress.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string,
//     quantity: PropTypes.number,
//     price: PropTypes.string,
//   }).isRequired,
// };

export default DetailsAddress;
