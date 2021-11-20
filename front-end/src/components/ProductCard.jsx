/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Proptypes from 'prop-types';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import './css/ProductCard.css';

function ProductCard(props) {
  const { product: { id, name, price, urlImage }, setCart, cart } = props;

  const addOne = (cardId) => {
    const elementId = `input-${cardId}`;
    const input = document.getElementById(elementId);
    const regex = /^[0-9\b]+$/;
    if (regex.test(input.value)) {
      input.value = parseInt(input.value, 10) + 1;
    } else {
      input.value = 1;
    }
    const newCart = [...cart];
    newCart[cardId - 1] = {
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
    const newCart = [...cart];
    newCart[cardId - 1] = {
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
    const idArray = cardId.split('-');
    if (value.isNaN) {
      inputValue = 0;
    }

    setCart({
      ...cart,
      [idArray[1]]: {
        price: cart[idArray[1]].price,
        quantity: parseInt(inputValue, 10),
        name: cart[cardId].name,
        urlImage: cart[cardId].urlImage,
      },
    });
  };

  return (
    <Card>
      <Card.Img
        className={ `card-image card-image-${id}` }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        variant="top"
        src={ urlImage }
      />
      <Card.Body>
        <Card.Title
          data-testid={ `customer_products__element-card-title-${id}` }
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
        <InputGroup className="sm-3">
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
            size="sm"
            min="0"
            max="99"
            id={ `input-${id}` }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ (e) => {
              changeCart(e.target.id, e.target.value);
            } }
            type="integer"
            placeholder="0"
            defaultValue="0"
          />
          <Button
            id={ id }
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ (e) => {
              console.log(e.target.id);
              return addOne(e.target.id);
            } }
            variant="success"
          >
            +
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
