import React from 'react';
import { Context } from '../../provider/Provider';

function EntryAddressNumber() {
  const { setAddressNumber } = React.useContext(Context);
  return (
    <div>
      <label htmlFor="addressNumber">
        Número
        <input
          type="number"
          name="addressNumber"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ (e) => setAddressNumber(e.target.value) }
        />
      </label>
    </div>
  );
}

export default EntryAddressNumber;
