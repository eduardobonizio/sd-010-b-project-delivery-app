import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import SaleProductsDetails from './SaleProductsDetails';
import test from '../../utils/dataTestIdDict';

function SaleDetails() {
  const { id } = useParams();
  const idNumber = parseInt(id, 10);
  const [saleDetails, setSaleDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await axios.get(`http://localhost:3001/sales/${idNumber}`, { headers: { Authorization: token } });
      setSaleDetails(data);
      setLoading(false);
    };
    fetchProductDetails();
  }, [idNumber]);

  if (loading) {
    return <span>Carregando conteúdo</span>;
  }

  const { seller: { name }, saleDate, status, products, totalPrice } = saleDetails;

  const formatedDate = new Date(saleDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <main>
      <span>Detalhes do pedido</span>
      <div
        data-testid={ `${test.dataTestId37}-${idNumber}` }
      >
        {`PEDIDO NÚMERO: ${idNumber}`}
      </div>
      <div data-testid={ `${test.dataTestId38}-${name}` }>{`VENDEDOR(A) ${name}`}</div>
      <div data-testid={ `${test.dataTestId39}-${saleDate}` }>{`DATA ${formatedDate}`}</div>
      <div data-testid={ `${test.dataTestId40}-${status}` }>{`STATUS ${status}`}</div>
      <div>
        <button
          type="button"
          data-testid={ `${test.dataTestId40}-${status}` }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <SaleProductsDetails products={ products } />
      <div data-testid={ `${1}-${totalPrice}` }>
        {`TOTAL ${totalPrice}`}
      </div>
    </main>
  );
}

export default SaleDetails;
