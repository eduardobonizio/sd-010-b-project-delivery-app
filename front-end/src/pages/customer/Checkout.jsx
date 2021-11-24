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
      <section style={ { padding: 80 } }>
        <TableItens />
        <p
          data-testid="customer_checkout__element-order-total-price"
        >
          { `Total: ${totalPrice.toFixed(2).replace('.', ',')}` }
        </p>
      </section>
      <DetailsAdress />
    </div>
  );
}

export default Checkout;
