import React from 'react';
import CheckoutDetails from '../../../components/CheckDetailsComponents/CheckoutDetails';
import Header from '../../../components/ProductsComponents/CheckBtnProducts';
import { Context } from '../../../provider/Provider';
import { postPurchase } from '../../../services/api';

function OrderDetails() {
  const { dataUser, totalOrder, setTotalOrder } = React.useContext(Context);

  async function handleCheckout() {
    const checkout = await postPurchase(dataUser.token);
    setTotalOrder(checkout);
  }

  useEffect(() => {
    handleCheckout();
  }, []);

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
