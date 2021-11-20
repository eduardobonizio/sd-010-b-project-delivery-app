import React from 'react';
import Proptypes from 'prop-types';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import './css/ProductCard.css';

function ProductCard({ id, name, price, urlImage, setCart, cart }) {
  const addOne = (cardId) => {
    const elementId = `input-${cardId}`;
    const input = document.getElementById(elementId);
    const regex = /^[0-9\b]+$/;
    if (regex.test(input.value)) {
      input.value = parseInt(input.value, 10) + 1;
    } else {
      input.value = 1;
    }
    setCart({
      ...cart,
      [cardId]: {
        price: cart[cardId].price,
        quantity: parseInt(input.value, 10),
      },
    });
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
    setCart({
      ...cart,
      [cardId]: {
        price: cart[cardId].price,
        quantity: parseInt(input.value, 10),
      },
    });
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
            defaultValue={ Object.keys(cart).length > 0 ? cart[id].quantity : 0 }
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
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  price: Proptypes.string.isRequired,
  urlImage: Proptypes.string.isRequired,
  setCart: Proptypes.func.isRequired,
  cart: Proptypes.objectOf(Proptypes.object).isRequired,
};

export default ProductCard;
