import React from "react";
// import * as S from "../styles/Produtos";
import PropTypes from "prop-types";

function ListCardProdutos({ products }) {
  console.log(products);
  const { price, url_image, name } = products;

  return (
    <div>
      <h3>{price}</h3>
      <img src={url_image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

ListCardProdutos.propTypes = {
  products: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListCardProdutos;
