import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { GoPlus, GoDash } from 'react-icons/go';
import DeliveryContext from '../context/DeliveryContext';
import { updateProducts, deleteProducts } from '../utils/localStorage';
import ID from '../utils/dataTestIdDict';
import '../styles/Card.css';

function Cards({ values }) {
  const [quantity, setQuantity] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const { totalSales, setTotalSales } = useContext(DeliveryContext);
  const { id, name, price, urlImage } = values;

  const formatedNumber = (number) => Number(number.toFixed(2));

  const sumQuantity = () => {
    setQuantity(quantity + 1);
    const result = formatedNumber(Number(price) + totalSales);
    setTotalSales(result);
  };

  const subQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      const result = formatedNumber(totalSales - Number(price));
      setTotalSales(result);
    }
  };

  const inputQuantity = ({ target }) => {
    const { value } = target;
    setQuantity(Number(value));
    const carrinho = formatedNumber(totalSales - totalProduct);
    const totalProd = formatedNumber(Number(value) * price);
    setTotalProduct(totalProd);
    const result = carrinho + totalProd;
    setTotalSales(result);
  };

  useEffect(() => {
    if (quantity >= 0) {
      /* const subTotal = formatedNumber(price * quantity);
      setTotalSales(totalSales + subTotal); */
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
          data-testid={ `${ID.dataTestId16}${id}` }
        >
          {`R$ ${price}`}
        </div>
        <img
          data-testid={ `${ID.dataTestId17}${id}` }
          alt="Cerveja"
          src={ urlImage }
        />
      </div>
      <div className="div-p-buttons">
        <div className="div-p" data-testid={ `${ID.dataTestId15}${id}` }>
          <p>{ name }</p>
        </div>
        <div className="div-buttons">
          <button
            type="button"
            onClick={ () => subQuantity() }
            data-testid={ `${ID.dataTestId19}${id}` }
          >
            <GoDash aria-label="sub" style={ { color: 'white' } } />
          </button>
          <input
            className="quantity"
            onChange={ inputQuantity }
            value={ quantity }
            data-testid={ `${ID.dataTestId20}${id}` }
          />
          <button
            type="button"
            onClick={ () => sumQuantity() }
            data-testid={ `${ID.dataTestId18}${id}` }
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
