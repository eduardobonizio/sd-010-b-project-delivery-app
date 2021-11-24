import React, { useContext } from 'react';
import TableItens from '../../components/Chechout/TableItens';
import DetailsAdress, {} from '../../components/Chechout/DetailsAdress';
import NavBar from '../../components/NavBar';
import LoginContext from '../../context/LoginContext';

function Checkout() {
  const { totalPrice } = useContext(LoginContext);

  return (
    <div>
      <NavBar />
      <TableItens style={ { margin: 50 } } />
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: ${totalPrice.toFixed(2).replace('.', ',')}` }
      </p>
      <DetailsAdress />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default Checkout;
