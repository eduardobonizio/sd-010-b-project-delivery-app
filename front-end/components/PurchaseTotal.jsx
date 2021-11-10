import React from 'react';
import Context from '../src/provider/Provider';

function PurshaseTotal() {
  const {orderInProgress, totalOrder, setTotalOrder} = useContext(Context);

  useEffect(() => {
    setTotalOrder(orderInProgress.reduce((acc, curr) => {
      return acc + (curr.price * curr.quantity);
    }, 0));
  }, [orderInProgress]);

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