/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';
import '../../styles/OrderDetailsSeller.css';

const TEST_ID_55 = 'seller_order_details__element-order-details-label-delivery-status';

const OrderDetails = ({ Pedido, Data, Status, HandleClick }) => {
  const data = moment(Data).format('DD/MM/YYYY');
  console.log('arroz');

  const renderSection = () => (
    <section className="seller-order-section">
      <div className="seller-order-div-1">
        <label
          htmlFor="order_id"
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          <button
            className="seller-order-p"
            type="button"
            id="order_date"
          >
            {' '}
            {`PEDIDO ${Pedido}`}
          </button>
        </label>
        <label
          htmlFor="order_id"
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          <button
            className="seller-order-p"
            type="button"
            id="order_date"
          >
            {data}
          </button>
        </label>
        <label
          htmlFor="order_status"
          data-testid={ TEST_ID_55 }
        >
          <button
            className="seller-order-p"
            type="button"
            id="order_status"
          >
            {Status}
          </button>
        </label>
      </div>
      <div className="seller-order-div-2">
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ HandleClick }
          name="PREPARAR PEDIDO"
          disabled={ Status !== 'Pendente' }
          id=""
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
