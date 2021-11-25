import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SaleProductsDetails from './SaleProductsDetails';
import test from '../../utils/dataTestIdDict';
import { updateSaleStatus, getSaleById } from '../../services/API';
import '../../styles/SeleDetails.css';

function SaleDetails() {
  const { id } = useParams();
  const idNumber = parseInt(id, 10);
  const [saleDetails, setSaleDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const execute = async () => {
      try {
        const data = await getSaleById(idNumber);
        setSaleDetails(data);
        setLoading(false);
      } catch (error) {
        return error;
      }
    };
    execute();
  }, [idNumber]);

  if (loading) {
    return <span>Carregando conteúdo</span>;
  }

  const { seller: { name }, saleDate, status, products, totalPrice } = saleDetails;
  const formattedDate = new Date(saleDate)
    .toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  const handleClick = async (newStatus) => {
    try {
      await updateSaleStatus(id, newStatus);
    } catch (error) {
      return error;
    }
  };

  return (
    <main className="main-conteiner">
      <span>Detalhes do pedido</span>
      <div className="conteiner-sele-details">
        <div
          data-testid={ `${test.dataTestId37}` }
        >
          {`PEDIDO NÚMERO: ${idNumber}`}
        </div>
        <div data-testid={ `${test.dataTestId38}` }>{`P. VEND(A): ${name}`}</div>
        <div data-testid={ `${test.dataTestId39}` }>{`${formattedDate}`}</div>
        <div data-testid={ `${test.dataTestId40}` }>{`${status}`}</div>
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
      </div>
      <div className="menu-seles-products-details">
        <p>Item</p>
        <p>Descrição</p>
        <p>Quantitdade</p>
        <p>Valor unitário</p>
        <p>Sub-total</p>
      </div>
      <SaleProductsDetails products={ products } />
      <div className="total-price-details">
        <p>Total R$</p>
        <p data-testid={ `${test.dataTestId45}` }>

          {`${totalPrice.replace('.', ',')}`}
        </p>
      </div>
    </main>
  );
}

export default SaleDetails;
