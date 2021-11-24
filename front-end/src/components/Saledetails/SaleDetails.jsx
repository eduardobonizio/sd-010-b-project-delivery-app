import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import SaleProductsDetails from './SaleProductsDetails';
import test from '../../utils/dataTestIdDict';
import { updateSaleStatus } from '../../services/sellerEndpoints';

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
  const formattedDate = new Date(saleDate).toLocaleDateString();

  const handleClick = async (newStatus) => {
    await updateSaleStatus(id, newStatus);
  };

  return (
    <main>
      <span>Detalhes do pedido</span>
      <div
        data-testid={ `${test.dataTestId37}` }
      >
        {`PEDIDO NÚMERO: ${idNumber}`}
      </div>
      <div data-testid={ `${test.dataTestId38}` }>{`VENDEDOR(A) ${name}`}</div>
      <div data-testid={ `${test.dataTestId39}` }>{`${formattedDate}`}</div>
      <div data-testid={ `${test.dataTestId40}` }>{`STATUS ${status}`}</div>
      <div>
        <button
          type="button"
          data-testid={ `${test.dataTestId47}` }
          disabled={ (status !== 'Em Trânsito') }
          onClick={ () => handleClick('Entregue') }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <SaleProductsDetails products={ products } />
      <div data-testid={ `${test.dataTestId45}` }>
        {`${totalPrice.replace('.', ',')}`}
      </div>
    </main>
  );
}

export default SaleDetails;
