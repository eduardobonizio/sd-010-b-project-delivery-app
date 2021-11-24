import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import SaleProductsDetails from './SaleProductsDetails';

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

  const { seller: { name }, saleDate, status, products } = saleDetails;

  return (
    <main>
      <span>Detalhes do pedido</span>
      <div>
        {
          `PEDIDO NUMERO:
          ${id} 
          Vendedor: ${name} 
          Data: ${saleDate}
          Status: ${status}`
        }
      </div>
      <div>
        <button type="button">MARCAR COMO ENTREGUE</button>
      </div>
      <SaleProductsDetails products={ products } />
    </main>
  );
}

export default SaleDetails;
