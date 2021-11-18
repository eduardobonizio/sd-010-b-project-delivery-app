import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

function DetailsOrder({ isRemoveBtn }) {
  const { dataOrder, setDataOrder } = useContext(AppContext);

  const handleChange = ({ target: { name } }) => {
    const result = dataOrder.filter((el) => el.name !== name);
    setDataOrder(result);
  };

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            { isRemoveBtn && <th>Remover Item</th> }
          </tr>
        </thead>
        <tbody>
          { dataOrder.length !== 0 && dataOrder
            .map(({ name, quantity, price, total }, index) => (
              <tr key={ name }>
                <td>
                  { index + 1 }
                </td>
                <td>
                  { name }
                </td>
                <td>
                  { quantity }
                </td>
                <td>
                  { price }
                </td>
                <td>
                  { total }
                </td>
                { isRemoveBtn && 
                  <td>
                    <button
                      type="button"
                      name={ name }
                      onClick={ handleChange }
                    >
                      Remover
                    </button>
                  </td> }
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

DetailsOrder.propTypes = {
  isRemoveBtn: PropTypes.bool.isRequired,
};

export default DetailsOrder;