import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ID from '../utils/dataTestIdDict';
import '../styles/CardOrder.css';

function Order({ sale }) {
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

  return (
    <Link className="boxOrder" to={ `/customer/orders/${sale.id}` }>
      <div className="conteiner">
        <div
          className={ `status ${colorStatus}` }
          data-testid={ ID.dataTestId34 }
        >
          { sale.status }
        </div>
        <div className="saleId" data-testid={ ID.dataTestId33 }>
          <p>Pedido</p>
          <p>{ sale.id }</p>
        </div>
        <div className="dataPrice">
          <div data-testid={ ID.dataTestId35 }>{ sale.saleDate }</div>
          <div>
            R$
            {' '}
            { sale.totalPrice }
          </div>
        </div>
      </div>
    </Link>
  );
}

Order.propTypes = PropTypes.objectOf({
  id: PropTypes.number,
  date: PropTypes.string,
  totalPrice: PropTypes.number,
}).isRequired;

export default Order;
