import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Logincontext from '../context/LoginContext';

function ProductCard({ id, name, image, price }) {
  const [valueInput, setValueInput] = useState(0);
  const { setTotalPrice } = useContext(Logincontext);
  const { arrayProducts, setArrayProducts } = useContext(Logincontext);

  const handleChange = (event, priceProduct) => {
    const { target } = event;
    const quantity = target.value;
    const numPrice = parseFloat(priceProduct);
    setValueInput(quantity);
    const newValue = numPrice * quantity;
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    const currentTotalValue = (newValue + valueCar);
    setTotalPrice(currentTotalValue);
    localStorage.setItem('carrinho', JSON.stringify(currentTotalValue));
    if (arrayProducts.length > 0) {
      const productToSubtract = arrayProducts.find((product) => product.id === id);
      if (productToSubtract) {
        productToSubtract.quantity = quantity;
        return;
      }
      return setArrayProducts([...arrayProducts, { id, name, price, quantity }]);
    }
    setArrayProducts([...arrayProducts, { id, name, price, quantity }]);
  };

  const addOne = (priceProduct) => {
    const numPrice = parseFloat(priceProduct);
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    const quantity = parseInt(valueInput, 10) + 1;
    setValueInput(quantity);
    const currentTotalValue = (valueCar + numPrice);
    setTotalPrice(currentTotalValue);
    localStorage.setItem('carrinho', JSON.stringify(currentTotalValue));
    if (arrayProducts.length > 0) {
      const productToSubtract = arrayProducts.find((product) => product.id === id);
      if (productToSubtract) {
        productToSubtract.quantity = quantity;
        return;
      }
      return setArrayProducts([...arrayProducts, { id, name, price, quantity }]);
    }
    setArrayProducts([...arrayProducts, { id, name, price, quantity }]);
  };

  const subOne = (priceProduct) => {
    const numPrice = parseFloat(priceProduct);
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    if (valueInput === 0) {
      console.log('entrou aqui');
      return 0;
    }
    const quantity = valueInput - 1;
    setValueInput(quantity);
    const currentTotalValue = (valueCar - numPrice);
    setTotalPrice(currentTotalValue);
    localStorage.setItem('carrinho', JSON.stringify(currentTotalValue));
    const productToSubtract = arrayProducts.find((product) => product.id === id);
    if (quantity === 0) {
      const quantityNonZero = arrayProducts.filter((product) => product.id !== id);
      setArrayProducts(quantityNonZero);
      return;
    }
    if (arrayProducts.length > 0) {
      if (productToSubtract) {
        productToSubtract.quantity = quantity;
        return;
      }
      return setArrayProducts([...arrayProducts, { id, name, price, quantity }]);
    }
    setArrayProducts([...arrayProducts, { id, name, price, quantity }]);
  };

  return (
    <section style={ { width: '160px', margin: 20 } }>
      <div
        key={ id }
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.replace('.', ',') }
        <img
          style={ { height: 200 } }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ image }
          alt={ name }
        />
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => addOne(price) }
        >
          { console.log(arrayProducts)}
          +
        </button>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => subOne(price) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ valueInput }
          onChange={ (event) => handleChange(event, price) }
          onClick={ (e) => { e.target.value = ''; } }
        />
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
