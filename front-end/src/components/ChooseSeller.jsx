import React, { useEffect } from 'react';
import { Context } from '../provider/Provider';

function ChooseSeller() {
  const { chooseSeller, setChooseSeller } = React.useContext(Context);

  useEffect(() => {
    setChooseSeller(chooseSeller[0].name);
  }, [chooseSeller, setChooseSeller]);

  return (
    <label htmlFor="chooseSeller">
      <select
        id="chooseSeller"
        name="chooseSeller"
        onChange={ (e) => setChooseSeller(e.target.value) }
      >
        {chooseSeller.map((seller) => (
          <option
            key={ seller.id }
            value={ seller.name }
          >
            {seller.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default ChooseSeller;
