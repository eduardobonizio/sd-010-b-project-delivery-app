/* eslint-disable react-hooks/exhaustive-deps */
import React
  from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';
import '../../styles/OrderDetailsSeller.css';

const TEST_ID_55 = 'seller_order_details__element-order-details-label-delivery-status';

const OrderDetails = ({ Pedido, Data, Status, HandleClick }) => {
  const data = moment(Data).format('DD/MM/YYYY');

  const renderSection = () => (
    <section className="seller-order-section">
      <div className="seller-order-div-1">

        <p
          className="seller-order-p"
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {' '}
          {`PEDIDO ${Pedido}`}
        </p>
        <p
          className="seller-order-p"
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {data}
        </p>
        <p
          className="seller-order-p"
          data-testid={ TEST_ID_55 }
        >
          {Status}
        </p>
      </div>
      <div className="seller-order-div-2">
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ HandleClick }
          name="PREPARAR PEDIDO"
          disabled={ Status !== 'Pendente' }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ HandleClick }
          disabled={ Status !== 'Preparando' }
          name="SAIU PARA ENTREGA"

        >
          SAIU PARA ENTREGA
        </button>
      </div>
    </section>
  );

  return (
    <div className="main-div-order">
      <h1>Detalhe do Pedido</h1>
      {renderSection()}
    </div>
  );
};

OrderDetails.propTypes = {
  Pedido: Proptypes.number.isRequired,
  Data: Proptypes.string.isRequired,
  Status: Proptypes.string.isRequired,
  HandleClick: Proptypes.func.isRequired,
};

export default OrderDetails;
