import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

function DetailsOrder({ isRemoveBtn }) {
  const { dataOrder, setDataOrder } = useContext(AppContext);

  const handleChange = ({ target: { name } }) => {
    const result = dataOrder.filter((el) => el.name !== name);
    setDataOrder(result);
  };

  const dataTesteIdItemNumber = isRemoveBtn
    ? 'customer_checkout__element-order-table-item-number-'
    : 'customer_order_details__element-order-table-item-number-';

  const dataTesteIdName = isRemoveBtn
    ? 'customer_checkout__element-order-table-name-'
    : 'customer_order_details__element-order-table-name-';

  const dataTesteIdQuantidade = isRemoveBtn
    ? 'cutomer_checkout__element-order-table-quantity-'
    : 'customer_order_details__element-order-table-quantity-';

  const dataTesteIdSubTotal = isRemoveBtn
    ? 'customer_checkout__element-order-table-sub-total-'
    : 'customer_order_details__element-order-table-sub-total';

  const dataTesteIdPrice = isRemoveBtn
    ? 'customer_checkout__element-order-table-unit-price-'
    : 'customer_order_details__element-order-total-price-';

  const dataTesteIdRemoverItem = isRemoveBtn
    && 'customer_checkout__element-order-table-remove-';

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          {isRemoveBtn && <th>Remover Item</th>}
        </tr>
      </thead>
      <tbody>
        {dataOrder.length !== 0
        && dataOrder.map(({ name, quantity, price, total }, index) => (
          <tr key={ name }>
            <td
              data-testid={ `${dataTesteIdItemNumber}${index + 1}` }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `${dataTesteIdName}${index + 1}` }
            >
              {name}
            </td>
            <td
              data-testid={ `${dataTesteIdQuantidade}${index + 1}` }
            >
              {quantity}
            </td>
            <td
              data-testid={ `${dataTesteIdSubTotal}${index + 1}` }
            >
              {Number(price).toFixed(2).toString().replace('.', ',')}
            </td>
            <td
              data-testid={ `${dataTesteIdPrice}${index + 1}` }
            >
              {Number(total).toFixed(2).toString().replace('.', ',')}
            </td>
            {isRemoveBtn && (
              <td>
                <button
                  type="button"
                  data-testid={ `${dataTesteIdRemoverItem}${index + 1}` }
                  name={ name }
                  onClick={ handleChange }
                >
                  Remover
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

DetailsOrder.propTypes = {
  isRemoveBtn: PropTypes.bool.isRequired,
};

export default DetailsOrder;
