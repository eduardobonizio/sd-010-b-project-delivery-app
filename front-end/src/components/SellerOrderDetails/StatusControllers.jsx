import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import dataTestIdDict from '../../utils/dataTestIdDict';
import { updateSaleStatus } from '../../services/API';

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
    date: new Date(saleDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
    deliveryStatus: status,
  };
  const isDisabledButtonsState = { preparing: true, inTransit: true };

  const [sale] = useState(saleState);
  const [isDisabledButtons, setIsDisabledButtons] = useState(isDisabledButtonsState);

  const backgroundColorByStatus = {
    Pendente: { backgroundColor: '#D3C63C' },
    Preparando: { backgroundColor: '#87D53C' },
    'Em Trânsito': { backgroundColor: '#66CDAA' },
    Entregue: { backgroundColor: '#47D5B1' },
  };

  useEffect(() => {
    switch (sale.deliveryStatus) {
    case 'Pendente':
      return setIsDisabledButtons({ inTransit: true, preparing: false });
    case 'Preparando':
      return setIsDisabledButtons({ inTransit: false, preparing: true });
    case 'Em Trânsito':
      return setIsDisabledButtons({ inTransit: true, preparing: true });
    default:
      return setIsDisabledButtons({ inTransit: true, preparing: true });
    }
  }, [sale.deliveryStatus]);

  const handleClick = async (newStatus) => {
    const { token } = JSON.parse(localStorage.user);
    try {
      await updateSaleStatus(token, id, newStatus);
    } catch (error) {
      return error;
    }
  };

  if (!componentData) return '';

  return (
    <div className="seller-status-controllers">
      <div data-testid={ dataTestId54 }>{ sale.id }</div>
      <div data-testid={ dataTestId56 }>{ sale.date }</div>
      <div>
        <div
          className="seller-status"
          data-testid={ dataTestId55 }
          style={ backgroundColorByStatus[sale.deliveryStatus] }
        >
          { sale.deliveryStatus }
        </div>
      </div>
      <div style={ { gridColumnStart: 5 } }>
        <button
          type="button"
          className={ isDisabledButtons.preparing ? 'disabled-button' : ' ' }
          name="preparing"
          data-testid={ dataTestId57 }
          disabled={ isDisabledButtons.preparing }
          onClick={ () => handleClick('Preparando') }
        >
          PREPARAR PEDIDO
        </button>
      </div>
      <div style={ { gridColumnStart: 6 } }>
        <button
          type="button"
          className={ isDisabledButtons.inTransit ? 'disabled-button' : ' ' }
          name="inTransit"
          data-testid={ dataTestId58 }
          disabled={ isDisabledButtons.inTransit }
          onClick={ () => handleClick('Em Trânsito') }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
    </div>
  );
}

StatusControllers.propTypes = {
  componentData: PropTypes.shape({
    id: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default StatusControllers;
