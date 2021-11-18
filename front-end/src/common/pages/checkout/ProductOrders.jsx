import React from 'react';
import OrderContainer from '../../components/OrderContainer';
import { Context } from '../../../provider/Provider';

function ProductOrders() {
  const { ordered } = React.useContext(Context);

  return (
    <div>
      {ordered.map((order) => (
        <OrderContainer key={ order.id } order={ order } />
      ))}
    </div>
  );
}

export default ProductOrders;
