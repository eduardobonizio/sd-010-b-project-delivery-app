import React, { useContext } from "react";
// import * as S from "../styles/Produtos";
import Context from "../context/Context";
import ListCardProdutos from "./ListCardProdutos";

function CardProdutos() {
  const { allProducts } = useContext(Context);
  return (
    <div>
      {allProducts.map((products) => (
        <ListCardProdutos key="key" products={products}/>
      ))}
    </div>
  );
}

export default CardProdutos;
