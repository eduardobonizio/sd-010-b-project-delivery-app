import React from 'react';
import Proptypes from 'prop-types';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import './css/ProductCard.css';

function ProductCard({ id, name, price, urlImage }) {
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
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            variant="success"
          >
            -
          </Button>
          <Form.Control
            as="input"
            htmlSize="2"
            size="sm"
            id={ `customer_products__input-card-quantity-${id}` }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ (e) => {
              console.log(e.target.value);
            } }
            type="integer"
            value="0"
          />
          <Button
            data-testid={ `customer_products__button-card-add-item-${id}` }
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
};

export default ProductCard;
