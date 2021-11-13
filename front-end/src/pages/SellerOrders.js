import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import StatusCard from '../components/statusCard';

export default function SellerOrders() {
  const [allProducts, setAllProducts] = useState([]);
  const [dataTestIds] = useState([]);

  const getAllSales = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await fetchAuthUser({ id: user.id });

    if (res.message) {
      console.log(res);
    } else {
      setAllProducts([...res]);
    }
  };

  useEffect(() => {
    getAllSales();
  }, []);

  return (
    <div>
      <NavBar isCustomer={ false } nameButtonOrder="Pedidos" linkOrder="/seller/orders" />
      <div>
        {allProducts.length !== 0
          && allProducts.map((el, index) => (
            <StatusCard
              product={ el }
              arrayDataTesti={ dataTestIds }
              key={ index }
            />
          ))}
      </div>
    </div>
  );
}
