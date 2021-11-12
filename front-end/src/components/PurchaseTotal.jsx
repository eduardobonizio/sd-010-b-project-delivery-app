import React, { useEffect } from 'react';
import { Context } from '../provider/Provider';

function PurshaseTotal() {
  const { orderInProgress, totalOrder, setTotalOrder } = React.useContext(Context);

  useEffect(() => {
    setTotalOrder(orderInProgress.reduce((
      acc, curr,
    ) => acc + (curr.price * curr.quantity), 0).toFixed(2));
  }, [orderInProgress, setTotalOrder]);

  return (
    <div>
      <h3
        data-testid="customer_checkout__element-order-total-price"
      >
        {
          `Total: ${totalOrder}`
        }
      </h3>
    </div>
  );
}

export default PurshaseTotal;
