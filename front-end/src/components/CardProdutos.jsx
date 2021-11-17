import React, { useContext } from 'react';
import * as S from '../styles/Produtos';
import Context from '../context/Context';
import ListCardProdutos from './ListCardProdutos';

function CardProdutos() {
  const { allProducts } = useContext(Context);
  return (
    <S.contentProduct>
      {allProducts.map((products) => (
        <ListCardProdutos key={ products.id } products={ products } />
      ))}
    </S.contentProduct>
  );
}

export default CardProdutos;
