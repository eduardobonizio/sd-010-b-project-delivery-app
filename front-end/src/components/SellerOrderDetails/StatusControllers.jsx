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
    switch (sale.deliveryStatus) {
    case 'PENDENTE':
      return setIsDisabledButtons({ inTransit: true, preparing: false });
    case 'PREPARANDO':
      return setIsDisabledButtons({ inTransit: false, preparing: true });
    case 'EM TRÂNSITO':
      return setIsDisabledButtons({ inTransit: true, preparing: true });
    default:
      return setIsDisabledButtons({ inTransit: true, preparing: true });
    }
  }, [sale.deliveryStatus]);

  const buttonClasses = {
    preparing: `seller-button ${isDisabledButtons.preparing && 'disabled-button'}`,
    inTransit: `seller-button ${isDisabledButtons.inTransit && 'disabled-button'}`,
  };

  if (!componentData) return '';

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
          className={ buttonClasses.preparing }
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
          className={ buttonClasses.inTransit }
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
