import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Input,
} from 'reactstrap';

function Cards() {
  // const prodBg = 'https://static.paodeacucar.com/img/uploads/1/241/693241.jpg';
  return (
    <div className="row">
      <div className="col-2">
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/256/186"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle>R$ 0,00</CardTitle>
            <CardImgOverlay />
          </CardBody>
          <CardTitle className="text-center mb-0">Product Name</CardTitle>
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
