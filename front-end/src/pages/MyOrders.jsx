// import axios from 'axios';
import React from 'react';
// import React, { useEffect, useState } from 'react';
// import CardOrder from '../components/CardOrder';
import Header from '../components/Header';

function MyOrders() {
  /* const [sales, setSales] = useState([]);

  const getAllSales = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYzNzI0OTEzNywiZXhwIjoxNjM3ODUzOTM3fQ.lpE5F_csIuqhxEyWnrYjiaP7fWr92txlyn7TPMNSipg';

    const endPoint = 'http://localhost:3001/sales';
    const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
    console.log(data);
    return setSales(data);
  };

  useEffect(() => {
    getAllSales();
  }, []);

  return (
    <>
      <Header />
      <div>
        {
          sales.map((sale) => <CardOrder key={ sale.id } sale={ sale } />)
        }
      </div>
    </>
  ); */
  return (
    <>
      <Header />
      <div>
        apague o return sem comentário e remova os comentários do arquivo xD
      </div>
    </>
  );
}

export default MyOrders;
