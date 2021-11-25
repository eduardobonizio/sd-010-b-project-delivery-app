import React from 'react';
import ChooseSeller from './ChooseSeller';
import EntryAddress from './EntryAddress';
import EntryAddressNumber from './EntryAddressNumber';

function DeliveryContainer() {
  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>
      <ChooseSeller />
      <EntryAddress />
      <EntryAddressNumber />
    </div>
  );
}

export default DeliveryContainer;
