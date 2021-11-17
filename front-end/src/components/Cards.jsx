import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap';
import { useCustomer } from '../hooks/useCustomer';
import { formatSaveAndRenderPrice } from '../helpers/functions';

function Cards({ product }) {
  // const prodBg = 'https://static.paodeacucar.com/img/uploads/1/241/693241.jpg';
  const { handleTotalSale } = useCustomer();
  const [quantity, setQuantity] = useState(0);

  function handleAddQuantity() {
    setQuantity(quantity + 1);
    const sale = {
      ...product,
      quantity: quantity + 1,
    };
    handleTotalSale(sale);
  }

  function handleSubQuantity() {
    setQuantity(quantity - 1);
    const sale = {
      ...product,
      quantity: quantity - 1,
    };
    handleTotalSale(sale);
  }

  return (
    <div className="row">
      <button type="button" onClick={ handleAddQuantity }>
        add
      </button>
      <input
        type="text"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        style={ { color: 'black' } }
      />
      <button type="button" onClick={ handleSubQuantity }>
        remove
      </button>
      <div className="col-2">
        <Card inverse>
          <CardImg
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            alt="Card image cap"
            src={ product.urlImage }
            top
            width="100%"
          />
          <CardBody>
            <CardTitle
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              {formatSaveAndRenderPrice(product.price)}
            </CardTitle>
            <CardImgOverlay />
          </CardBody>
          <CardTitle
            className="text-center mb-0"
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }
          </CardTitle>
          <CardBody className="d-flex">
            <button
              type="button"
              className="btn btn-primary d-flex justify-content-center"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-primary d-flex justify-content-center"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
            >
              +
            </button>
          </CardBody>
        </Card>

      </div>
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};
