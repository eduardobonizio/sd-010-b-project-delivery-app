import React, { useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../provider/Provider';

function ChooseSeller() {
  const { sellers, setChooseSeller, setSellers } = React.useContext(Context);

  useEffect(() => {
    axios.get('http://localhost:3001/sellers')
      .then(({ data }) => {
        setSellers(data);
        return data;
      })
      .then((data) => setChooseSeller(data[0].id));
  }, [setChooseSeller, setSellers]);

  return (
    <label htmlFor="chooseSeller">
      P. Vendedora Responsável
      <select
        id="chooseSeller"
        name="chooseSeller"
        data-testid="customer_checkout__select-seller"
        onChange={ (e) => setChooseSeller(Number(e.target.value)) }
      >
        {sellers.map((sell) => (
          <option
            key={ sell.id }
            value={ sell.id }
          >
            {sell.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default ChooseSeller;
