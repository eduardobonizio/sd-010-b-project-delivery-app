import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import * as S from "../styles/Produtos";
import PropTypes from "prop-types";

function ListCardProdutos({ products }) {
  const { id, price, url_image, name } = products;
  const { insertCart } = useContext(Context);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    insertCart({ id, name, price, quantity });
  }, [quantity]);

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    if (quantity === 0) return null;
    setQuantity(quantity - 1);
  };

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <S.eachProduct>
      <S.priceProduct
        data-testid={`customer_products__element-card-price-${id}`}
      >
        {price.replace(".", ",")}
      </S.priceProduct>
      <S.imgProduct
        data-testid={`customer_products__img-card-bg-image-${id}`}
        src={url_image}
        alt={name}
      />
      <S.nameProduct
        data-testid={`customer_products__element-card-title-${id}`}
      >
        {name}
      </S.nameProduct>
      <S.qtyProduct>
        <S.buttonProduct
          type="button"
          data-testid={`customer_products__button-card-rm-item-${id}`}
          onClick={() => {
            removeItem();
          }}
        >
          -
        </S.buttonProduct>
        <S.inputProduct
          data-testid={`customer_products__input-card-quantity-${id}`}
          value={quantity}
          min="0"
          onChange={(e) => handleChange(e)}
          type="number"
        />
        <S.buttonProduct
          type="button"
          data-testid={`customer_products__button-card-add-item-${id}`}
          onClick={() => {
            addItem();
          }}
        >
          +
        </S.buttonProduct>
      </S.qtyProduct>
    </S.eachProduct>
  );
}

ListCardProdutos.propTypes = {
  products: PropTypes.object,
  price: PropTypes.string,
  url_image: PropTypes.string,
  name: PropTypes.string,
};

export default ListCardProdutos;
