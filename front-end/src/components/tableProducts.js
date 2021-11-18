import React from 'react';
import PropTypes from 'prop-types';

const tableHead = ['Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];
const AOS_ANIMATION_DELAY = 150;

export default function TableProducts({ products, type }) {
  return (
    <div className="mx-20">
      <table className="w-full mt-20 text-center">
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
              data-aos="fade-up"
              data-aos-delay={ index * AOS_ANIMATION_DELAY }
              key={ el.id }
              className="border-t-8 border-b-8 border-white bg-yellow-color"
            >
              <td
                className="py-2 rounded-l-lg"
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
                <span className="inline-block w-4/5 px-10 py-1 bg-white">
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
                <span className="inline-block w-4/5 h-10 px-8 py-2 bg-white">
                  {el.price}
                </span>
              </td>
              <td
                className="rounded-r-lg"
                data-testid={
                  `${type}_order_details__element-order-table-sub-total-${index}`
                }
              >
                <span className="inline-block w-4/5 h-10 px-8 py-2 bg-white">

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
