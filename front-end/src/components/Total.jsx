import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

function Total() {
  const { dataOrder } = useContext(AppContext);

  const getTotal = () => {
    console.log(dataOrder);
    const result = dataOrder.reduce((prev, curren) => prev + Number(curren.total), 0)
      .toFixed(2).replace('.', ',');
    return result;
  };
  return (
    <>
      <span>Total:</span>
      <span>{getTotal()}</span>
    </>

  );
}

export default Total;
