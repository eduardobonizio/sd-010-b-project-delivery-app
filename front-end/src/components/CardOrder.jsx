import React from 'react';
import ID from '../utils/dataTestIdDict';

function Order() {
  return (
    <div>
      <div data-testid={ ID.dataTestId33 }>Pedido 01</div>
      <div data-testid={ ID.dataTestId34 }>Pendente</div>
      <div>
        <div data-testid={ ID.dataTestId35 }>08/04/21</div>
        <div>23,80</div>
      </div>
    </div>
  );
}

export default Order;
