import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import APITOKEN from '../api/index';

function OrderDetails() {
  const [saleInfo, setsaleInfo] = useState({});
  const params = useParams();
  useEffect(() => {
    APITOKEN.fetchSaleInfo(params.id).then((response) => setsaleInfo(response.data));
  }, [params.id]);
  console.log(saleInfo);
  return (
    <div>
      <NavBar />
      {params.id}
    </div>
  );
}

export default OrderDetails;
