import React from 'react';
import dataTestIdDict from '../../utils/dataTestIdDict';

const {
  dataTestId22,
  dataTestId23,
  dataTestId24,
  dataTestId25,
  dataTestId26,
  dataTestId27,
} = dataTestIdDict;

function ItemRow() {
  return (
    <div className="item-row">
      <div data-testid={ dataTestId22 }>1</div>
      <div data-testid={ dataTestId23 }>Salgadinho Torcida Churrasco</div>
      <div data-testid={ dataTestId24 }>1</div>
      <div data-testid={ dataTestId25 }>R$ 3,50</div>
      <div data-testid={ dataTestId26 }>R$ 10,50</div>
      <div data-testid={ dataTestId27 }>Remover</div>
    </div>
  );
}

export default ItemRow;
