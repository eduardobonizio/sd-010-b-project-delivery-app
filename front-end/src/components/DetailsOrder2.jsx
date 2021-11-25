import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

function DetailsOrder() {
  const { productsAPI, detailsOrder, name } = useContext(AppContext);

  const dataTesteIdItemNumber = `customer_order_detail
    s__element-order-table-item-number-`;

  const dataTesteIdName = 'customer_order_details__element-order-table-name-';

  const dataTesteIdQuantidade = 'customer_order_details__element-order-table-quantity-';

  const dataTesteIdSubTotal = 'customer_order_details__element-order-table-sub-total-';

  const dataTesteIdPrice = 'customer_order_details__element-order-total-price-';
  const { id, saleDate, status } = detailsOrder;
  const date = new Date(saleDate);

  return (
    <>
      <span>
        <lable
          htmlFor="input-id"
          data-testid={ `customer_order_details__element
          -order-details-label-order-${id}` }
        >
          PEDIDO -
          <selector id="input-id">{id}</selector>
          <selector />
        </lable>
        <lable
          htmlFor="input-name"
          data-testid={ `
          -order-details-label-seller-name${id}` }
        >
          P.Venda
          <selector id="input-name">{name}</selector>
        </lable>
        <lable
          htmlFor="input-date"
          data-testid={ `customer_order_details__
          element-order-details-label-order-date${id}` }
        >
          <selector id="input-date">{ date.toLocaleString().split(',', 1)}</selector>
        </lable>
        <lable
          htmlFor="input-status"
          data-testid={ `customer_order_details__element-
          order-details-label-delivery-status${id}` }
        >
          <input id="input-status" value={ status } />
        </lable>
        <lable htmlFor="button">
          <button
            type="button"
            id="button"
            data-testid={ `customer_order_details__button-
            delivery-check` }
          >
            Marcar Como Entregue
          </button>
        </lable>
      </span>
      <table>
        <thead>
          <tr />
        </thead>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {productsAPI.map((element, index) => (
            <tr key={ element.name }>
              <td data-testid={ `${dataTesteIdItemNumber}${index}` }>
                {index + 1}
              </td>
              <td data-testid={ `${dataTesteIdName}${index}` }>{element.name}</td>
              <td data-testid={ `${dataTesteIdQuantidade}${index}` }>
                {element.SalesProduct.quantity}
              </td>
              <td data-testid={ `${dataTesteIdPrice}${index}` }>
                {Number(element.price).toFixed(2).toString().replace('.', ',')}
              </td>
              <td data-testid={ `${dataTesteIdSubTotal}${index}` }>
                {(Number(element.SalesProduct.quantity) * Number(element.price))
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DetailsOrder;
