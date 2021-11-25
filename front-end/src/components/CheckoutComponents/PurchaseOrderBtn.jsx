import React from 'react';
import { Context } from '../../provider/Provider';

function PurchaseOrderBtn() {
  const { checkoutPurchase } = React.useContext(Context);
  return (
    <button
      type="button"
      data-testid="customer_checkout__button-submit-order"
      onClick={ async () => checkoutPurchase() }
    >
      FINALIZAR PEDIDO
    </button>
  );
}

export default PurchaseOrderBtn;
