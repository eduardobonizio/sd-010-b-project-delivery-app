import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import OrdersCard from '../components/Order/OrderCard';
import LoginContext from '../context/LoginContext';

export default function CustomerOrder() {
  const [data, setData] = useState([]);
  const { setOrders } = useContext(LoginContext);

  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then((result) => {
        setData(result.data);
        setOrders(result.data);
        // console.log(result.data);
      });
  }, []);

  return (
    <section>
      <div>
        <NavBar />
      </div>
      <div style={ { padding: 80 } }>
        { data.map(({ id, sale_date: saleDate, status, total_price: totalPrice }) => (
          <OrdersCard
            key={ id }
            id={ id }
            saleDate={ saleDate }
            status={ status }
            totalPrice={ totalPrice }
          />
        ))}
        {/* <TotalOrderButton /> */}
      </div>
    </section>
  );
}
