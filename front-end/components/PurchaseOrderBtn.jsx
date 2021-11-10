import React from 'react';
import Context from '../src/provider/Provider';

function PurchaseOrderBtn() {
  const {checkoutPurchase } = React.useContext(Context);
  return (
    <button
      type="button"
      data-testid="customer_checkout__button-submit-order"
      onClick={checkoutPurchase}
    >
      FINALIZAR PEDIDO
    </button>
  );
}

export default PurchaseOrderBtn;