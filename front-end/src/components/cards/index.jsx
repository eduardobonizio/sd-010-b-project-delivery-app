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
      {
        dataProducts.map((value, index) => (
          <ContainerCard key={ value.id }>

            <CotainerPrice>
              <TextPrice
                data-testid={ `customer_products__element-card-price-${value.id}` }
              >
                {`R$ ${value.price}`}
              </TextPrice>
            </CotainerPrice>

            <ImageProduct
              data-testid={ `customer_products__img-card-bg-image-${value.id}` }
              src={ imageCerveja }
            />

            <ContainerQuantity>
              <TextName
                data-testid={ `customer_products__element-card-title-${value.id}` }
              >
                {value.name}
              </TextName>

              <ContainerInput>
                <ButtonQuantitySubtract
                  id="rm"
                  type="button"
                  name="quantity"
                  data-testid={ `customer_products__button-card-rm-item-${value.id}` }
                  onClick={ (event) => handleOnClick(index, event) }
                  value={ value.price }
                >
                  -
                </ButtonQuantitySubtract>

                <InputQuantity
                  data-testid={ `customer_products__input-card-quantity-${value.id}` }
                  type="number"
                  min="0"
                  value={ value.quantity }
                  onChange={ (event) => handleOnChange(index, event) }
                  name="quantity"
                />

                <ButtonQuantitySum
                  id="add"
                  type="button"
                  name="quantity"
                  data-testid={ `customer_products__button-card-add-item-${value.id}` }
                  onClick={ (event) => handleOnClick(index, event) }
                  value={ value.price }
                >
                  +
                </ButtonQuantitySum>
              </ContainerInput>

            </ContainerQuantity>

          </ContainerCard>
        ))
      }
      <Link to="/customer/checkout">
        <ButtonCart
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Ver Carrinho: R$ ${valueTotalProduct.toFixed(2)}`}
        </ButtonCart>
      </Link>
    </ContainerListCard>
  );
}

export default CardsProducts;
