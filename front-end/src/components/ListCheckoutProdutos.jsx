import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Context from '../context/Context';

const removeItem = (itemId) => {
  console.log(itemId);
};

function ListCheckoutProdutos() {
  let count = 0;

  const { cart, totalPrice } = useContext(Context);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            if (product.quantity > 0) {
              count += 1;
              return (
                <tr key={ index }>
                  <td>{count}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price.replace('.', ',')}</td>
                  <td>{product.quantity * product.price}</td>
                  <td>
                    <button
                      type="button"
                      onClick={ () => removeItem(product.id) }
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <h1>{totalPrice}</h1>
    </div>
  );
}

// ListCheckoutProdutos.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string,
//     quantity: PropTypes.number,
//     price: PropTypes.string,
//   }).isRequired,
// };

export default ListCheckoutProdutos;
