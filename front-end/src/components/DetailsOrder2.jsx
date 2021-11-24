import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

function DetailsOrder() {
  const { productsAPI } = useContext(AppContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      await setData(productsAPI);
    };
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dataTesteIdItemNumber = `customer_order_detail
    s__element-order-table-item-number-`;

  const dataTesteIdName = 'customer_order_details__element-order-table-name-';

  const dataTesteIdQuantidade = 'customer_order_details__element-order-table-quantity-';

  const dataTesteIdSubTotal = 'customer_order_details__element-order-table-sub-total';

  const dataTesteIdPrice = 'customer_order_details__element-order-total-price-';

  return (
    <table>
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
        {data.map((element, index) => (
          <tr key={ element.name }>
            <td
              data-testid={ `${dataTesteIdItemNumber}${index + 1}` }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `${dataTesteIdName}${index + 1}` }
            >
              { element.name }
            </td>
            <td
              data-testid={ `${dataTesteIdQuantidade}${index + 1}` }
            >
              { element.SalesProduct.quantity }
            </td>
            <td
              data-testid={ `${dataTesteIdPrice}${index + 1}` }
            >
              {Number(element.price).toFixed(2).toString().replace('.', ',')}
            </td>
            <td
              data-testid={ `${dataTesteIdSubTotal}${index + 1}` }
            >
              {(Number(element.SalesProduct.quantity) * Number(element.price))
                .toFixed(2).toString().replace('.', ',')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DetailsOrder;
