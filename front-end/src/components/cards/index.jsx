/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiGetAllProducts from '../../services/products/customerProduct';
import * as style from './styles';
// import { setOnLocalStorage } from '../../helpers/localStorage';

function CardsProducts() {
  const [dataProducts, setDataProducts] = useState([]);
  // const [inputQuantity, setInputQuantity] = useState([]);

  const valueTotalProduct = dataProducts
    .reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  // console.log(inputQuantity);
  useEffect(() => {
    async function apiRequest() {
      const response = await apiGetAllProducts() || [];
      const newResponse = response.map((value) => ({
        ...value,
        quantity: 0,
      }));
      // const valueQuantity = newResponse.map((value) => ({
      //   name: value.name,
      //   quantity: Number(value.quantity),
      //   price: value.price,
      // }));
      setDataProducts(newResponse);
      // setInputQuantity(valueQuantity);
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
    <style.ContainerListCard>
      {
        dataProducts.map((value, index) => (
          <style.ContainerCard key={ value.id }>

            <style.CotainerPrice>
              <style.TextPrice
                data-testid={ `customer_products__element-card-price-${value.id}` }
              >
                {value.price.replace('.', ',')}
              </style.TextPrice>
            </style.CotainerPrice>

            <style.ImageProduct
              data-testid={ `customer_products__img-card-bg-image-${value.id}` }
              src={ value.url_image }
              alt={ `Bebida é ${value.name}` }
            />

            <style.ContainerQuantity>
              <style.TextName
                data-testid={ `customer_products__element-card-title-${value.id}` }
              >
                {value.name}
              </style.TextName>

              <style.ContainerInput>
                <style.ButtonQuantitySubtract
                  id="rm"
                  type="button"
                  name="quantity"
                  data-testid={ `customer_products__button-card-rm-item-${value.id}` }
                  onClick={ (event) => handleOnClick(index, event) }
                  value={ value.price }
                >
                  -
                </style.ButtonQuantitySubtract>

                <style.InputQuantity
                  data-testid={ `customer_products__input-card-quantity-${value.id}` }
                  type="number"
                  min="0"
                  value={ value.quantity }
                  onChange={ (event) => handleOnChange(index, event) }
                  name="quantity"
                />

                <style.ButtonQuantitySum
                  id="add"
                  type="button"
                  name="quantity"
                  data-testid={ `customer_products__button-card-add-item-${value.id}` }
                  onClick={ (event) => handleOnClick(index, event) }
                  value={ value.price }
                >
                  +
                </style.ButtonQuantitySum>
              </style.ContainerInput>

            </style.ContainerQuantity>

          </style.ContainerCard>
        ))
      }
      <Link to="/customer/checkout">
        <style.ButtonCart
          type="button"
          disabled={ valueTotalProduct === 0 }
          data-testid="customer_products__button-cart"
        >
          Ver Carrinho: R$
          <style.TextTotalCart data-testid="customer_products__checkout-bottom-value">
            {valueTotalProduct.toFixed(2).replace('.', ',')}
          </style.TextTotalCart>
        </style.ButtonCart>
      </Link>
    </style.ContainerListCard>
  );
}

export default CardsProducts;
