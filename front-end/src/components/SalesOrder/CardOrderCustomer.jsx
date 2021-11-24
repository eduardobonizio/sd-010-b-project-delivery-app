import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ID from '../../utils/dataTestIdDict';
import '../../styles/CardOrderCustomer.css';

function CardOrderCustomer({ sale }) {
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
    <Link className="boxOrder" to={ `/customer/orders/${sale.id}` }>
      <div className="conteiner">
        <div
          className={ `status ${colorStatus}` }
          data-testid={ `${ID.dataTestId34}${sale.id}` }
        >
          { sale.status }
        </div>
        <div className="saleId">
          <p>Pedido</p>
          <p data-testid={ `${ID.dataTestId33}${sale.id}` }>{ sale.id }</p>
        </div>
        <div className="dataPrice">
          <div data-testid={ `${ID.dataTestId35}${sale.id}` }>{ data }</div>
          <div className="divPrice">
            <p>R$</p>
            <p data-testid={ `customer_orders__element-card-price-${sale.id}` }>
              { sale.totalPrice.replace('.', ',') }
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

CardOrderCustomer.propTypes = PropTypes.objectOf({
  id: PropTypes.number,
  date: PropTypes.string,
  totalPrice: PropTypes.number,
}).isRequired;

export default CardOrderCustomer;
