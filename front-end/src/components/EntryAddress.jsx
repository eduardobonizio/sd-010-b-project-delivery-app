import React from 'react';
import { Context } from '../provider/Provider';

function EntryAddress() {
  const { setPurchaseAddress } = React.useContext(Context);
  return (
    <div>
      <label htmlFor="insert-address">
        Endereço
        <input
          type="text"
          name="insert-address"
          data-testid="customer_checkout__input-address"
          onChange={ (e) => setPurchaseAddress(e.target.value) }
        />
      </label>
    </div>
  );
}

export default EntryAddress;
