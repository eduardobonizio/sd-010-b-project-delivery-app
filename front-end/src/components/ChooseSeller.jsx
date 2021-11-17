import React, { useEffect } from 'react';
import { Context } from '../provider/Provider';

function ChooseSeller() {
  const { sellers, setChooseSeller } = React.useContext(Context);

  useEffect(() => {
    setChooseSeller(sellers[0].name);
  }, [sellers, setChooseSeller]);

  return (
    <label htmlFor="chooseSeller">
      P. Vendedora Responsável
      <select
        id="chooseSeller"
        name="chooseSeller"
        data-testid="customer_checkout__select-seller"
        onChange={ (e) => setChooseSeller(e.target.value) }
      >
        {sellers.map((sell) => (
          <option
            key={ sell.id }
            value={ sell.name }
          >
            {sell.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default ChooseSeller;
