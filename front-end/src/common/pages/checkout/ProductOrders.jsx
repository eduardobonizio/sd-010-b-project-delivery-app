import React from 'react';
import CheckoutDetails from '../../../components/CheckDetailsComponents/CheckoutDetails';
import { Context } from '../../../provider/Provider';

function ProductOrders() {
  const { ordered } = React.useContext(Context);

  return (
    <div>
      {ordered.map((order) => (
        <CheckoutDetails key={ order.id } order={ order } />
      ))}
    </div>
  );
}

export default ProductOrders;
