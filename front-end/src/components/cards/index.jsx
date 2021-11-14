/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiGetAllProducts from '../../services/products/customerProduct';
import imageCerveja from '../../images/longs.jpg';
import {
  ButtonCart,
  ButtonQuantitySubtract,
  ButtonQuantitySum,
  ContainerCard,
  ContainerInput,
  ContainerListCard,
  ContainerQuantity,
  CotainerPrice,
  ImageProduct,
  InputQuantity,
  TextName,
  TextPrice,
} from './styles';
// import { setOnLocalStorage } from '../../helpers/localStorage';

function CardsProducts() {
  return (
    <ContainerListCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
      <ContainerCard>
        <ContainerQuantity />
      </ContainerCard>
    </ContainerListCard>
  );
}

export default CardsProducts;
