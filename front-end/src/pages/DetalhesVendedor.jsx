import React, { useState, useEffect } from 'react';
import OrderVendedor from '../components/OrderVendedor';
import Navbar from '../components/NavbarVendedor';
import APITOKEN from '../api/index';

function DetalhesVendedor() {
  const [ordersState, setOrdersState] = useState([]);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const { token } = userInfo;
    APITOKEN.fetchSellerOrders(token).then((data) => setOrdersState(data));
  }, []);

  console.log('ordersState :', ordersState);

  return (
    <div>
      <Navbar />
      { ordersState.data
        ? ordersState.data.map((or) => <OrderVendedor key={ or.id } order={ or } />)
        : <p>API limpa</p>}
    </div>
  );
}

export default DetalhesVendedor;
