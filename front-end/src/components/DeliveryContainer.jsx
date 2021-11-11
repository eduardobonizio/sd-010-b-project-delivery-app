import React from 'react';
import ChooseSeller from './ChooseSeller';
import EntryAddress from './EntryAddress';
import EntryAddressNumber from './EntryAddressNumber';

function DeliveryContainer() {
  return (
    <div className="delivery-container">
      <ChooseSeller />
      <EntryAddress />
      <EntryAddressNumber />
    </div>
  );
}

export default DeliveryContainer;
