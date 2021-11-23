import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ID from '../utils/dataTestIdDict';
import '../styles/CardOrder.css';

function CardOrderSeller({ sale }) {
  // const [colorStatus, setColorStatus] = useState('pendente');
  // const [valueStatus, setValueStatus] = useState('Pendente');

  let colorStatus = 'pendente';

  if (sale.status === 'Pedente') {
    colorStatus = 'pedente';
  }
  if (sale.status === 'Preparando') {
    colorStatus = 'preparando';
  }
  if (sale.status === 'Entregue') {
    colorStatus = 'entregue';
  }

  const data = new Date(sale.saleDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <Link className="boxOrder" to={ `/seller/orders/${sale.id}` }>
      <div className="conteinerSeller">
        <div
          className={ `status ${colorStatus}` }
          data-testid={ `${ID.dataTestId49}${sale.id}` }
        >
          { sale.status }
        </div>
        <div className="saleId">
          <p>Pedido</p>
          <p data-testid={ `${ID.dataTestId48}${sale.id}` }>{ sale.id }</p>
        </div>
        <div className="dataPrice">
          <div data-testid={ `${ID.dataTestId50}${sale.id}` }>{ data }</div>
          <div className="divPrice">
            <p>R$</p>
            <p data-testid={ `${ID.dataTestId51}${sale.id}` }>
              { sale.totalPrice.replace('.', ',') }
            </p>
          </div>
        </div>
        <div className="address" data-testid={ `${ID.dataTestId52}${sale.id}` }>
          { sale.deliveryAddress }
        </div>
      </div>
    </Link>
  );
}

CardOrderSeller.propTypes = PropTypes.objectOf({
  id: PropTypes.number,
  date: PropTypes.string,
  totalPrice: PropTypes.number,
}).isRequired;

export default CardOrderSeller;
