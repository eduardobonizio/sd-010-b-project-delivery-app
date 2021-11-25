import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../context/ContextGlobal';
import NavBar from '../components/NavBar';
import FormCheckout from '../components/FormCheckout';

function CustomerCheckout() {
  const { total, setTotal } = useContext(Context);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const totalProductss = getLocalStorage
      .map((product) => product.totalValue).reduce((acc, curr) => acc + curr, 0);
    setTotal((parseFloat(totalProductss).toFixed(2)));
  }, [selected, setTotal]);

  useEffect(() => {
    setSelected(JSON.parse(localStorage.getItem('cart')));
  }, []);

  const removeProductFromLocalStorage = (id) => {
    const newCart = selected.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setSelected(JSON.parse(localStorage.getItem('cart')));
  };

  return (
    <div>
      <NavBar />
      <div className="checkout-item">
        {selected.map((item, index) => (
          <div key={ item.id }>
            <span
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </span>
            <span
              data-testid={
                `customer_checkout__element-order-table-name-${index}`
              }
            >
              { item.name }
            </span>
            <span
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              { item.quantity }
            </span>
            <span
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              { item.price.replace('.', ',') }
            </span>
            <span
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              { (item.totalValue).toFixed(2).replace('.', ',') }
            </span>
            <button
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              type="button"
              onClick={ () => removeProductFromLocalStorage(item.id) }
            >
              Remover
            </button>
          </div>
        ))}
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {total && total.replace('.', ',')}
        </span>
      </div>
      <FormCheckout />
    </div>
  );
}

export default CustomerCheckout;
