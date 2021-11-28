import React from 'react';
import Proptypes from 'prop-types';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';

function ProductCard(props) {
  const { product, product: { id, name, price, urlImage, quantity },
    setCart, cart } = props;
  const addOne = (cardId) => {
    const elementId = `input-${cardId}`;
    const input = document.getElementById(elementId);
    const regex = /^[0-9\b]+$/;
    if (regex.test(input.value)) {
      input.value = parseInt(input.value, 10) + 1;
    } else {
      input.value = 1;
    }
    const indexOfProduct = cart.indexOf(product);
    const newCart = [...cart];
    newCart[indexOfProduct] = {
      id,
      price,
      quantity: parseInt(input.value, 10),
      name,
      urlImage,
    };
    setCart(newCart);
  };

  const removeOne = (cardId) => {
    const elementId = `input-${cardId}`;
    const input = document.getElementById(elementId);
    const regex = /^[0-9\b]+$/;

    if ((regex.test(input.value)) && (parseInt(input.value, 10) > 0)) {
      input.value = parseInt(input.value, 10) - 1;
    } else {
      input.value = 0;
    }
    const indexOfProduct = cart.indexOf(product);
    const newCart = [...cart];
    newCart[indexOfProduct] = {
      id,
      price,
      quantity: parseInt(input.value, 10),
      name,
      urlImage,
    };
    setCart(newCart);
  };

  const changeCart = (cardId, value) => {
    let inputValue = value;
    const idArray = cardId.split('-')[1] - 1;
    if (value.isNaN) {
      inputValue = 0;
    }

    const newCart = [...cart];
    newCart[idArray] = {
      id,
      price,
      quantity: parseInt(inputValue, 10),
      name,
      urlImage,
    };
    setCart(newCart);
  };

  return (

    <Card>
      <Card.Img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        variant="top"
        src={ urlImage }
        style={ { heigth: '100px' } }
      />
      <Card.Title
        data-testid={ `customer_products__element-card-title-${id}` }
        style={ {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        } }
      >
        { name }
      </Card.Title>
      <Card.Text>
        R$
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.toString().split('.').join(',') }
        </span>
      </Card.Text>
      <InputGroup>
        <Button
          id={ id }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          variant="success"
          onClick={ (e) => removeOne(e.target.id) }
        >
          -
        </Button>
        <Form.Control
          as="input"
          min="0"
          max="99"
          id={ `input-${id}` }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => {
            changeCart(e.target.id, e.target.value);
          } }
          type="integer"
          placeholder="0"
          defaultValue={ quantity }
        />
        <Button
          id={ id }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ (e) => addOne(e.target.id) }
          variant="success"
        >
          +
        </Button>
      </InputGroup>
    </Card>

  );
}

ProductCard.propTypes = {
  product: Proptypes.shape({
    id: Proptypes.number,
    quantity: Proptypes.number,
    name: Proptypes.string,
    price: Proptypes.string,
    urlImage: Proptypes.string,
  }).isRequired,
  setCart: Proptypes.func.isRequired,
  cart: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default ProductCard;
