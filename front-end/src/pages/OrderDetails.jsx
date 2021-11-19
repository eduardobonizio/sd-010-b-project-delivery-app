import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';

function OrderDetails() {
  const params = useParams();
  return (
    <div>
      <NavBar />
      {params.id}
    </div>
  );
}

export default OrderDetails;
