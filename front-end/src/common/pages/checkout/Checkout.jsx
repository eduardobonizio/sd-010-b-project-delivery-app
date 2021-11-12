import React from 'react';
import { Context } from '../../../provider/Provider';
import CheckoutProducts from '../../../components/CheckoutProducts';
import PurchaseTotal from '../../../components/PurchaseTotal';
import EntryAddress from '../../../components/EntryAddress';
import PurchaseOrderBtn from '../../../components/PurchaseOrderBtn';

function Checkout() {
  const { orderInProgress } = React.useContext(Context);
  return (
    <div>
      {orderInProgress.map((order, index) => (
        <CheckoutProducts
          orderItem={ order }
          key={ index }
          index={ index }
        />
      ))}
      <PurchaseTotal />
      <EntryAddress />
      <PurchaseOrderBtn />
    </div>
  );
}

export default Checkout;
