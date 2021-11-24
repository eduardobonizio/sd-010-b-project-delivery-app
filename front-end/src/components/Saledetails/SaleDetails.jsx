import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import SaleProductsDetails from './SaleProductsDetails';
import test from '../../utils/dataTestIdDict';

function SaleDetails() {
  const { id } = useParams();
  console.log(id);
  const [saleDetails, setSaleDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(saleDetails);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await axios.get(`http://localhost:3001/sales/${id}`, { headers: { Authorization: token } });
      setSaleDetails(data);
      setLoading(false);
    };
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <span>Carregando conteúdo</span>;
  }

  const { seller: { name }, saleDate, status, products, totalPrice } = saleDetails;

  console.log(test.dataTestId37);

  return (
    <main>
      <span>Detalhes do pedido</span>
      <div data-testid={ `${test.dataTestId37}-${id}` }>{`PEDIDO NÚMERO: ${id}`}</div>
      <div data-testid={ `${test.dataTestId38}-${name}` }>{`VENDEDOR(A) ${name}`}</div>
      <div data-testid={ `${test.dataTestId39}-${saleDate}` }>{`DATA ${saleDate}`}</div>
      <div data-testid={ `${test.dataTestId40}-${status}` }>{`STATUS ${status}`}</div>
      <div>
        <button type="button">MARCAR COMO ENTREGUE</button>
      </div>
      <SaleProductsDetails products={ products } />
      <div data-testid={ `${1}-${totalPrice}` }>
        {`TOTAL ${totalPrice}`}
      </div>
    </main>
  );
}

export default SaleDetails;
