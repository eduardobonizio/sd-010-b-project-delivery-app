import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Input,
} from 'reactstrap';

function Cards({ product }) {
  // const prodBg = 'https://static.paodeacucar.com/img/uploads/1/241/693241.jpg';
  return (
    <div className="row">
      <div className="col-2">
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={ product.urlImage }
            top
            width="100%"
          />
          <CardBody>
            <CardTitle>{ `R$ ${product.price}` }</CardTitle>
            <CardImgOverlay />
          </CardBody>
          <CardTitle className="text-center mb-0">{ product.name }</CardTitle>
          <CardBody className="d-flex">
            <Button> - </Button>
            <Input />
            <Button> + </Button>
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
