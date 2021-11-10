import React, { useEffect } from 'react';
import Context from '../src/provider/Provider';

function ChooseSeller() {
  const {chooseSeller, setChooseSeller} = React.useContext(Context);

  useEffect(() => {
    setChooseSeller(chooseSeller[0].name);
  }, []);
  
  return (
    <select onChange={(e) => setChooseSeller(e.target.value)}>
      {chooseSeller.map((seller) => (
        <option
          key={seller.id}
          value={seller.name}
        >
          {seller.name}
        </option>
      ))}
    </select>
  );
}

export default ChooseSeller;