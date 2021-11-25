import React from 'react';
import Context from '../context/Context';

export default function ProductsTable() {
  const { cart, totalCart, deleteProductFromCart } = React.useContext(Context);
  const sample = 'customer_checkout__';

  return (
    <>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Descrição</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor Unitário</th>
            <th scope="col">Sub-total</th>
            <th scope="col">Remover Item</th>
          </tr>
        </thead>
        <tbody>

          {cart.map(({ name, price, quantity, id }, _id) => (
            <tr key={ id }>
              <th
                scope="row"
                data-testid={ `${sample}element-order-table-item-number-${_id}` }
              >
                {_id + 1}
              </th>
              <td data-testid={ `${sample}element-order-table-name-${_id}` }>
                {name}
              </td>
              <td data-testid={ `${sample}element-order-table-quantity-${_id}` }>
                {quantity}
              </td>
              <td data-testid={ `${sample}element-order-table-unit-price-${_id}` }>
                {price.toString().replace('.', ',')}
              </td>
              <td data-testid={ `${sample}element-order-table-sub-total-${_id}` }>
                {
                  ((price * quantity).toFixed(2)).toString().replace('.', ',')
                }

              </td>
              <td data-testid={ `${sample}element-order-table-remove-${_id}` }>
                <button
                  data-testid={ `${sample}element-order-table-remove-${_id}` }
                  type="button"
                  onClick={ () => deleteProductFromCart(id) }
                >
                  Remover Item

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        Total:
        {' '}
        <strong data-testid={ `${sample}element-order-total-price` }>
          {totalCart.toString().replace('.', ',')}

        </strong>
      </div>
    </>
  );
}
