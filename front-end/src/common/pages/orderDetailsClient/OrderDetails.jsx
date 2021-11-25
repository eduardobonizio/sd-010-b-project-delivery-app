import React, { useEffect } from 'react';
import CheckoutDetails from '../../../components/CheckDetailsComponents/CheckoutDetails';
import Header from '../../../components/ProductsComponents/CheckBtnProducts';
import { Context } from '../../../provider/Provider';
import { postPurchase } from '../../../services/api';

function OrderDetails() {
  const { dataUser, setTotalOrder,
    totalOrder,
  } = React.useContext(Context);

  useEffect(() => {
    async function handleCheckout() {
      const checkout = await postPurchase(dataUser.token);
      setTotalOrder(checkout);
    }

    handleCheckout();
  }, [setTotalOrder, dataUser]);

  return (
    <div>
      <Header />
      <div>
        {totalOrder.map((item) => (
          <CheckoutDetails
            key={ item.id }
            order={ item }
          />
        ))}
      </div>
    </div>
  );
}

export default OrderDetails;
