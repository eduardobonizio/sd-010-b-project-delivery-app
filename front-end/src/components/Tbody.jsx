import React, { useEffect, useState } from 'react';
import getProducts from '../services/products';

function Tbody() {
  const [products, setProducts] = useState([]);
  const cart = JSON.parse(localStorage.getItem('carrinho'));
  const cartItems = Object.entries(cart).filter((item) => item[1] > 0);

  const renderProducts = (resultData) => {
    const productData = [];

    cartItems.forEach((i) => resultData.forEach((p) => {
      if (p.id === parseInt(i[0], 10)) productData.push(p);
    }));

    return productData;
  };

  const fetchData = async () => {
    const result = await getProducts();
    const resultData = await result.data;
    setProducts(resultData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <tbody>
      {
        renderProducts(products).map((prod, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {prod.name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {cart[prod.id] / prod.price}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {prod.price.replace(/\./, ',') }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {cart[prod.id].toFixed(2).toString().replace(/\./, ',')}
            </td>
            <td>
              <button
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                type="button"
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

export default Tbody;
