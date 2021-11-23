import React from 'react';
import Proptypes from 'prop-types';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
// import './css/ProductCard.css';

function CheckoutProductCard(props) {
  const { product, product: { id, name, price, urlImage, quantity },
    setCart, cart } = props;
  const index = cart.indexOf(product);
  // Lint reclamando do tamanho da linha com nome explicito
  // const iForTestId = index + 1;

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
    newCart[index] = {
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
    newCart[index] = {
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

  const removeItem = (productIndex) => {
    const newCart = [...cart];
    newCart.splice(productIndex, 1);
    return setCart(newCart);
  };

  return (
    <Card style={ { width: '10rem', height: '325px' } }>

      <Card.Body>
        <Card.Text>
          <span
            data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          >
            { index + 1 }
          </span>
        </Card.Text>
        <Card.Title
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
          style={ { fontSize: '5px' } }
        >
          { name }
        </Card.Title>
        <Card.Title
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          style={ { fontSize: '5px' } }
        >
          { quantity }
        </Card.Title>
        <Card.Text>
          R$
          <span
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            { price.toString().split('.').join(',') }
          </span>
        </Card.Text>
        <Card.Text>
          R$
          <span
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            { (price * quantity).toFixed(2).toString().split('.').join(',') }
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
            data-testid={ `cutomer_checkout__element-order-table-quantity-${index}` }
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
          <Button
            id={ id }
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            onClick={ () => removeItem(index) }
            variant="success"
          >
            Remover
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

CheckoutProductCard.propTypes = {
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

export default CheckoutProductCard;
