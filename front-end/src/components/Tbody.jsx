import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getProducts from '../services/products';

function Tbody(props) {
  const { getTotal } = props;
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const cart = JSON.parse(localStorage.getItem('carrinho'));
  const cartItems = Object.entries(cart).filter((item) => item[1] > 0);

  const renderProducts = (resultData) => {
    const productData = [];
    cartItems.forEach((i) => resultData.forEach((p) => {
      if (p.id === parseInt(i[0], 10)) productData.push(p);
    }));
    setItems(productData);
  };

  const fetchData = async () => {
    const result = await getProducts();
    const resultData = await result.data;
    setProducts(resultData);
    setLoading(false);
  };

  const removeItem = (index, id) => {
    delete cart[id];
    cartItems.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(cart));
    renderProducts(products);
    getTotal();
  };

  useEffect(() => {
    fetchData();
    renderProducts(products);
  }, [loading]);

  if (loading) return <p>Carregando</p>;
  if (items.length === 0) return <p>vazio</p>;

  return (
    <tbody>
      {
        items.map((prod, index) => (
          <tr key={ index }>
            <td
              className="td-item"
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              className="td-name"
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {prod.name}
            </td>
            <td
              className="td-quant"
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {cart[prod.id] / prod.price}
            </td>
            <td
              className="td-price"
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {prod.price.replace(/\./, ',') }
            </td>
            <td
              className="td-total"
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {cart[prod.id].toFixed(2).toString().replace(/\./, ',')}
            </td>
            <td>
              <button
                className="li-delete-button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                type="button"
                onClick={ () => removeItem(index, prod.id) }
              >
                Remover
              </button>
            </td>
          </tr>
        ))
      }
    </tbody>
  );
}

Tbody.propTypes = {
  getTotal: PropTypes.func.isRequired,
};

export default Tbody;
