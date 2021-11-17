import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { GoPlus, GoDash } from 'react-icons/go';
import DeliveryContext from '../context/DeliveryContext';
import { updateProducts, deleteProducts } from '../utils/localStorage';
import '../styles/Card.css';

function Cards({ values }) {
  const [quantity, setQuantity] = useState(false);
  const { totalSales, setTotalSales } = useContext(DeliveryContext);
  const { id, name, price, urlImage } = values;

  const formatedNumber = (number) => Number(number.toFixed(2));

  const sumQuantity = () => {
    setQuantity(quantity + 1);
    console.log(totalSales);
    const result = formatedNumber(Number(price) + totalSales);
    setTotalSales(result);
  };

  const subQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      const result = formatedNumber(totalSales - Number(price));
      setTotalSales(result);
      console.log(totalSales);
    }
  };

  useEffect(() => {
    if (quantity !== false) {
      updateProducts({
        id,
        name,
        quantity,
        preco: price,
        subTotal: price * quantity,
      });
    }
    if (quantity === 0) {
      deleteProducts(id);
    }
  }, [id, name, price, quantity]);

  return (
    <div className="div-cards">
      <div className="div-image">
        <div
          className="div-price"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`R$ ${price}`}
        </div>
        <img
          alt="Cerveja"
          src={ urlImage }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div className="div-p-buttons">
        <div className="div-p">
          <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
        </div>
        <div className="div-buttons">
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => subQuantity() }
          >
            <GoDash aria-label="sub" style={ { color: 'white' } } />
          </button>
          <div
            className="quantity"
            data-testid={ `customer_products__input-card-quantity-${id}` }
          >
            {quantity}
          </div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => sumQuantity() }
          >
            <GoPlus aria-label="somar" style={ { color: 'white' } } />
          </button>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  values: PropTypes.object,
  totalSalesProduct: PropTypes.func,
}.isRequired;

export default Cards;
