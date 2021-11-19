import PropTypes from 'prop-types';
import React from 'react';

export default function StatusCardFragment(props) {
  const dateNow = (date) => {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const { bgColorStatus, order, type, status } = props;
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <div
          className={
            `flex items-center p-4 font-semibold ${bgColorStatus} rounded-lg`
          }
        >
          <p
            data-testid={ `${type}_orders__element-delivery-status-${order.id}` }
          >
            {status.toUpperCase()}
          </p>
        </div>
        <div
          className="border-l-2 pl-4 space-y-2 flex flex-col items-center
                justify-center"
        >
          <p
            data-testid={ `${type}_orders__element-order-date-${order.id}` }
          >
            {dateNow(order.saleDate)}
          </p>
          <p
            className="flex justify-center w-full pt-2 border-t-2"
            data-testid={ `${type}_orders__element-card-price-${order.id}` }
          >
            {order.totalPrice.replace('.', ',')}
          </p>
        </div>
      </div>

      <div className="flex justify-end w-full pt-1 border-t-2">
        <p
          data-testid={ `${type}_orders__element-card-address-${order.id}` }
        >
          {`${order.deliveryAddress}`}
        </p>
      </div>
    </div>

  // fragment
  // <div className="flex flex-col space-y-4">
  //   <div className="flex space-x-4">
  //     <div
  //       className={
  //         `flex items-center p-4 font-semibold ${bgColorStatus} rounded-lg`
  //       }
  //     >
  //       <p
  //         data-testid={ `${type}_orders__element-delivery-status-${order.id}` }
  //       >
  //         {status.toUpperCase()}
  //       </p>
  //     </div>
  //     <div
  //       className="border-l-2 pl-4 space-y-2 flex flex-col items-center
  //             justify-center"
  //     >
  //       <p
  //         data-testid={ `${type}_orders__element-order-date-${order.id}` }
  //       >
  //         { dateNow }
  //       </p>
  //       <p
  //         className="flex justify-center w-full pt-2 border-t-2"
  //         data-testid={ `${type}_orders__element-card-price-${order.id}` }
  //       >
  //         {order.totalPrice.replace('.', ',')}
  //       </p>
  //     </div>
  //   </div>

  //   <div className="flex justify-end w-full pt-1 border-t-2">
  //     <p
  //       data-testid={ `${type}_orders__element-card-address-${order.id}` }
  //     >
  //       {`${order.deliveryAddress}`}
  //     </p>
  //   </div>
  // </div>
  );
}

StatusCardFragment.propTypes = {
  setRole: PropTypes.func,
  bgColorStatus: PropTypes.string,
  order: PropTypes.object,
  type: PropTypes.string,
  status: PropTypes.string,
  dateNow: PropTypes.func,
}.isRequired;
