/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import SaleProducts from '../components/SellerOrderDetails/SaleProducts';
import StatusControllers from '../components/SellerOrderDetails/StatusControllers';
import TableHeader from '../components/SellerOrderDetails/TableHeader';
import dataTestIdDict from '../utils/dataTestIdDict';
import { getSaleById } from '../services/sellerEndpoints';
import '../styles/SellerOrderDetails.css';

const { dataTestId64 } = dataTestIdDict;

function SellerOrderDetails() {
  const { id } = useParams();

  const [saleProducts, setSaleProducts] = useState(null);
  const [statusControllersData, setStatusControllersData] = useState(null);
  const [orderTotalPrice, setOrderTotalPrice] = useState(null);

  useEffect(() => {
    getSaleById(id).then((res) => {
      const { products, saleDate, status, totalPrice } = res;
      setSaleProducts(products);
      setStatusControllersData({ id, saleDate, status });
      setOrderTotalPrice(totalPrice.replace('.', ','));
    });
  }, [id]);

  return (
    <>
      <Header userRole="seller" />
      <div className="seller-order-details-container">
        <h3>Detalhe do pedido</h3>
        <div className="seller-order-items-table">
          { (!saleProducts || !statusControllersData || !orderTotalPrice)
            ? (<div>carregando...</div>)
            : (
              <>
                <StatusControllers componentData={ statusControllersData } />
                <TableHeader />
                <SaleProducts products={ saleProducts } />
                <div className="order-total-price" data-testid={ dataTestId64 }>
                  {orderTotalPrice}
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
}

export default SellerOrderDetails;
