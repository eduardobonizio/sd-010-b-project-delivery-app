import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import OrdersTable from './OrdersTable';
function OrderCard({ id, saleDate, status, totalPrice }) {
  const format = moment(saleDate).format('DD/MM/YYYY');

  return (
    <div>
      <section style={ { display: 'flex', justifyContent: 'space-around' } }>
        <p
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          {`PEDIDO: 000 ${id}`}

        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          { `Data Pedido ${format}` }

        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          { status }

        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          { totalPrice.replace('.', ',') }
        </p>
        {/* <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue

        </button> */}
      </section>
      {/* <section>
        <OrdersTable />
      </section> */}
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default OrderCard;
