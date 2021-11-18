import PropTypes from 'prop-types';
import React from 'react';

const tableHead = ['Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];

export default function TableProducts({ products, type }) {
  return (
    <div>
      <table className="w-full mt-20 text-center border-collapse">
        <tr>
          {tableHead.map((el) => (
            <th
              key={ el }
              className="py-3"
            >
              {el}
            </th>
          ))}
        </tr>
        <tbody className="text-lg">
          {products[0].products.map((el, index) => (
            <tr
              key={ el.id }
              className="bg-yellow-color"
            >
              <td
                className=" rounded-l-lg py-2 my-10"
                data-testid={
                  `${type}_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                className="px-0"
                data-testid={
                  `${type}_order_details__element-order-table-name-${index}`
                }
              >
                <span className="bg-white py-1 px-10 inline-block w-4/5">
                  {el.name}
                </span>
              </td>
              <td
                className=""
                data-testid={
                  `${type}_order_details__element-order-table-quantity-${index}`
                }
              >
                {products[1][index].quantity}
              </td>
              <td
                data-testid={
                  `${type}_order_details__element-order-table-unit-price-${index}`
                }
              >
                <span className="bg-white py-2 px-8">
                  {el.price}
                </span>
              </td>
              <td
                className="rounded-r-lg"
                data-testid={
                  `${type}_order_details__element-order-table-sub-total-${index}`
                }
              >
                <span className="bg-white py-2 px-8">

                  {(parseFloat(products[1][index].quantity)
              * parseFloat(el.price).toFixed(2))}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableProducts.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
