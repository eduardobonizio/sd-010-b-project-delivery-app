import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';

function OrderDetails() {
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = 3;

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productInfo = await axios.get(`http://localhost:3001/${id}`);
      console.log(productInfo);
      setProductDetails(productInfo);
      setLoading(false);
    };
    fetchProductDetails();
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {productDetails}
    </div>
  );
}

export default OrderDetails;
