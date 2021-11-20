import React from 'react';
import PropTypes from 'prop-types';

function Thead(props) {
  const { removeBtn } = props;
  const keys = [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];
  if (removeBtn) keys.push('Remover Item');

  return (
    <thead>
      <tr>
        {keys.map((key, index) => <th key={ index }>{key}</th>)}
      </tr>
    </thead>
  );
}

Thead.propTypes = {
  removeBtn: PropTypes.bool.isRequired,
};

export default Thead;
