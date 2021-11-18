import React from 'react';

function Thead() {
  const keys = [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'];

  return (
    <thead>
      <tr>
        {keys.map((key, index) => <th key={ index }>{key}</th>)}
      </tr>
    </thead>
  );
}

export default Thead;
