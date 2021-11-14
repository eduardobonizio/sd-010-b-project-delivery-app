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
  const [dataProducts, setDataProducts] = useState([]);
  const [inputQuantity, setInputQuantity] = useState([]);

  const valueTotalProduct = dataProducts
    .reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  console.log(inputQuantity);
  useEffect(() => {
    async function apiRequest() {
      const response = await apiGetAllProducts();
      const newResponse = response.map((value) => ({
        ...value,
        quantity: 0,
      }));
      const valueQuantity = newResponse.map((value) => ({
        name: value.name,
        quantity: Number(value.quantity),
        price: value.price,
      }));
      setDataProducts(newResponse);
      setInputQuantity(valueQuantity);
    }
    apiRequest();
  }, []);

  function handleOnClick(index, event) {
    const { id } = event.target;
    const valuesDataProducts = [...dataProducts];
    if (id === 'add') {
      valuesDataProducts[index][event.target.name] += 1;
      setDataProducts(valuesDataProducts);
    }
    if (id === 'rm' && valuesDataProducts[index][event.target.name] > 0) {
      valuesDataProducts[index][event.target.name] -= 1;
      setDataProducts(valuesDataProducts);
    }
  }

  function handleOnChange(index, event) {
    const valuesDataProducts = [...dataProducts];
    valuesDataProducts[index][event.target.name] = Number(event.target.value);
    setDataProducts(valuesDataProducts);
  }

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
