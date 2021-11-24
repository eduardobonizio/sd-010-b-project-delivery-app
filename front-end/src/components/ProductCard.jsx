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
    const subTotal = numPrice * quantity;
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    const currentTotalValue = (subTotal + valueCar);
    setTotalPrice(currentTotalValue);
    localStorage.setItem('carrinho', JSON.stringify(currentTotalValue));
    if (arrayProducts.length > 0) {
      const productToSubtract = arrayProducts.find((product) => product.id === id);
      if (productToSubtract) {
        productToSubtract.quantity = quantity;
        productToSubtract.subTotal = quantity * numPrice;
        return;
      }
      setArrayProducts([...arrayProducts, { id, name, price, quantity, subTotal }]);
    }
    setArrayProducts([...arrayProducts, { id, name, price, quantity, subTotal }]);
  };

  const addOne = (priceProduct) => {
    const numPrice = parseFloat(priceProduct);
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    const quantity = parseInt(valueInput, 10) + 1;
    const subTotal = numPrice * quantity;
    setValueInput(quantity);
    const currentTotalValue = (valueCar + numPrice);
    setTotalPrice(currentTotalValue);
    localStorage.setItem('carrinho', JSON.stringify(currentTotalValue));
    if (arrayProducts.length > 0) {
      const productToSubtract = arrayProducts.find((product) => product.id === id);
      if (productToSubtract) {
        productToSubtract.quantity = quantity;
        productToSubtract.subTotal = quantity * numPrice;
        return;
      }
      setArrayProducts([...arrayProducts, { id, name, price, quantity, subTotal }]);
    }
    setArrayProducts([...arrayProducts, { id, name, price, quantity, subTotal }]);
  };

  const subOne = (priceProduct) => {
    const numPrice = parseFloat(priceProduct);
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    if (valueInput === 0) {
      console.log('entrou aqui');
      return 0;
    }
    const quantity = valueInput - 1;
    const subTotal = numPrice * quantity;
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
        productToSubtract.subTotal = quantity * numPrice;
        return;
      }
      setArrayProducts([...arrayProducts, { id, name, price, quantity, subTotal }]);
    }
    setArrayProducts([...arrayProducts, { id, name, price, quantity, subTotal }]);
  };

  return (
    <section style={ { textAlign: 'center' } }>
      <div
        key={ id }
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        <p>{ price.replace('.', ',') }</p>
        <img
          style={ { height: 150 } }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ image }
          alt={ name }
        />
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
        <div style={ { display: 'flex' } }>
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => addOne(price) }
          >
            +
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ valueInput }
            onChange={ (event) => handleChange(event, price) }
            onClick={ (e) => { e.target.value = ''; } }
            style={ { width: 100, textAlign: 'center' } }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => subOne(price) }
          >
            -
          </button>
        </div>
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
