import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import OrdersCard from '../components/Order/OrderCard';
// import TotalOrderButton from '../components/Order/TotalOrderButton';

export default function CustomerOrder() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then((result) => {
        setData(result.data);
        console.log(result);
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
