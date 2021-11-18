import React, { useEffect } from 'react';
import { Context } from '../../provider/Provider';
import addZeroes from '../../helper/functions/addZeroes';

function PurshaseTotal() {
  const { orderInProgress, totalOrder, setTotalOrder } = React.useContext(Context);

  useEffect(() => {
    setTotalOrder(orderInProgress.reduce((
      acc, curr,
    ) => acc + (curr.price * curr.quantity), 0));
  }, [orderInProgress, setTotalOrder]);

  return (
    <div>
      <h3
        data-testid="customer_checkout__element-order-total-price"
      >
        {addZeroes(totalOrder)}
      </h3>
    </div>
  );
}

export default PurshaseTotal;
