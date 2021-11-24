import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import dataTestIdDict from '../../utils/dataTestIdDict';

const {
  dataTestId54,
  dataTestId55,
  dataTestId56,
  dataTestId57,
  dataTestId58,
} = dataTestIdDict;

function StatusControllers({ componentData }) {
  const { id, saleDate, status } = componentData;

  const saleState = {
    id,
    date: new Date(saleDate).toLocaleDateString(),
    deliveryStatus: status.toUpperCase(),
  };
  const isDisabledButtonsState = { preparing: true, inTransit: true };

  const [sale] = useState(saleState);
  const [isDisabledButtons, setIsDisabledButtons] = useState(isDisabledButtonsState);

  const backgroundColorByStatus = {
    PENDENTE: { backgroundColor: '#D3C63C' },
    PREPARANDO: { backgroundColor: '#87D53C' },
    'EM TRÂNSITO': { backgroundColor: '#66CDAA' },
    ENTREGUE: { backgroundColor: '#47D5B1' },
  };

  useEffect(() => {
    switch (status) {
    case 'Pendente':
      setIsDisabledButtons({ inTransit: true, preparing: false });
      break;
    case 'Preparando':
      setIsDisabledButtons({ inTransit: false, preparing: true });
      break;
    case 'Em Trânsito':
      setIsDisabledButtons({ inTransit: true, preparing: true });
      break;
    default:
      setIsDisabledButtons({ inTransit: true, preparing: true });
      break;
    }
  }, [status]);

  const preparingButtonClasses = `seller-button ${preparing && 'disabled-button'}`;
  const inTransitButtonClasses = `seller-button ${inTransit && 'disabled-button'}`;

  return (
    <div className="seller-status-controllers">
      <div data-testid={ dataTestId54 }>{ id }</div>
      <div data-testid={ dataTestId55 }>{ saleDate.toLocaleDateString() }</div>
      <div>
        <div
          className="seller-status"
          data-testid={ dataTestId56 }
          style={ backgroundColorByStatus[status.toUpperCase()] }
        >
          { status.toUpperCase() }
        </div>
      </div>
      <div style={ { gridColumnStart: 5 } }>
        <button
          type="button"
          className={ preparingButtonClasses }
          name="preparing"
          data-testid={ dataTestId57 }
          disabled={ isDisabledButtons.preparing }
          onClick={ () => console.log('preparar pedido') }
        >
          PREPARAR PEDIDO
        </button>
      </div>
      <div style={ { gridColumnStart: 6 } }>
        <button
          type="button"
          className={ inTransitButtonClasses }
          name="inTransit"
          data-testid={ dataTestId58 }
          disabled={ isDisabledButtons.inTransit }
          onClick={ () => console.log('entregando...') }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
    </div>
  );
}

StatusControllers.propTypes = {
  componentData: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.instanceOf(Date),
    status: PropTypes.string,
  }).isRequired,
};

export default StatusControllers;
