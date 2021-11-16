import React from 'react';
// import CheckoutDetails from '../../../components/';
import Header from '../../../components/Header';
import GetPurchase from '../../../services/api';
import { Context } from '../../../provider/Provider';

function ClientCheckoutDetails() {
  const { dataUser, setDataUser, ordered } = React.useContext(Context);

  async function getAllPurchase() {
    const purchase = await GetPurchase(dataUser.token);
    setDataUser({ ...dataUser, purchase });
  }

  React.useEffect(() => {
    getAllPurchase();
  }, [getAllPurchase]);

  return (
    <>
      <Header />
      <div>
        {ordered.map((item) => (
          <CheckoutDetails
            key={ item.id }
            order={ item }
          />
        ))}
      </div>
    </>
  );
}

export default ClientCheckoutDetails;
