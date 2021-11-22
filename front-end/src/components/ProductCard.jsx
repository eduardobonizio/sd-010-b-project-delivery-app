import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Logincontext from '../context/LoginContext';

// import axios from 'axios';
// import { io } from 'socket.io-client';

// / const socket = io('http://localhost:3001');

function ProductCard({ id, name, image, price }) {
  const [valueInput, setValueInput] = useState(0);
  const { setTotalPrice } = useContext(Logincontext);
  // const ELEVEN = 11;

  // useEffect(() => {
  //   axios.get('http://localhost:3001/products')
  //     .then((result) => {
  //       setIsLoading(false);
  //       setData(result.data);
  //     });
  // }, []);

  const handleChange = (event, priceProduct) => {
    const numPrice = parseFloat(priceProduct);
    const { target } = event;
    console.log(target.value);
    setValueInput(target.value);
    const newValue = numPrice * target.value;
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    const currentTotalValue = (newValue + valueCar);
    setTotalPrice(currentTotalValue);
    localStorage.setItem('carrinho', JSON.stringify(currentTotalValue));
  };

  const addOne = (priceProduct) => {
    const numPrice = parseFloat(priceProduct);
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    // console.log(typeof valueCar);
    // console.log(typeof numPrice);
    const newValue = parseInt(valueInput, 10) + 1;
    // const newValue = valueInput + 1;
    setValueInput(newValue);
    const currentTotalValue = (valueCar + numPrice);
    setTotalPrice(currentTotalValue);
    localStorage.setItem('carrinho', JSON.stringify(currentTotalValue));
  };

  const subOne = (priceProduct) => {
    const numPrice = parseFloat(priceProduct);
    const valueCar = JSON.parse(localStorage.getItem('carrinho'));
    console.log(valueInput);
    if (valueInput === 0) {
      console.log('entrou aqui');
      return 0;
    }
    // let newValue = 0;
    const newValue = valueInput - 1;
    setValueInput(newValue);
    const currentTotalValue = (valueCar - numPrice);
    setTotalPrice(currentTotalValue);
    localStorage.setItem('carrinho', JSON.stringify(currentTotalValue));
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
