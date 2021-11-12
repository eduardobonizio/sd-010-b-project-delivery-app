import React from 'react';

function cardProduct(props) {
  return (
    <div className="cardProduct">
      <span>{`R$${props.price}`}</span>
      <img alt="produto" src={ props.url_image } />
      <div className="">
        <span>{props.name}</span>
        <div className="controlerQuantityProduct">
          <button className="decrementProduct" type="button">-</button>
          <span className="quantity">0</span>
          <button className="incrementeProduct" type="button">+</button>
        </div>
      </div>
    </div>
  );
}

export default cardProduct;
