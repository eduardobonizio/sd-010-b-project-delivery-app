import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/navbar';
// import TableDetails from '../../../components/TableDetails';
import {
  apiRequestOrdersByID,
} from '../../../services/salesProducts/apiRequestSalesProduct';
import SellerNavBar from '../../../components/sellerNavBar';

export default function Details() {
  const [sales, setSales] = useState();
  const { id } = useParams();

  useEffect(() => {
    const resultApi = async () => {
      const result = await apiRequestOrdersByID(id);
      console.log('entrei no resuult', result[0]);
      setSales(result);
    };
    resultApi();
    console.log(sales);
  }, [id, sales]);

  return (
    <div>
      <NavBar />
      <p>Detalhes do Pedido</p>
      {sales && <SellerNavBar
        id={ sales[0].id }
        name="fulano pereira"
        saleDate={ sales[0].saleDate }
        status={ sales[0].status }
      />}
      {/* <TableDetails /> */}
      <p data-testid="customer_order_details__element-order-total-price">
        Preço total
      </p>
    </div>
  );
}
