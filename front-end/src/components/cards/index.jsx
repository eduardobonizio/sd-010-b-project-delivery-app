import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../context/Context';
import { setOnLocalStorage } from '../../helpers/localStorage';
import * as style from './styles';

function CardsProducts() {
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    dataProducts,
    setDataProducts,
    cartProduct,
  } = useContext(MyContext);

  useEffect(() => {
    const valueTotalProduct = dataProducts
      .reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setTotalPrice(valueTotalProduct);
    setOnLocalStorage('cart', cartProduct);
    setOnLocalStorage('totalCart', totalPrice);
  }, [cartProduct, dataProducts, totalPrice]);

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

  function handleOnClickButtonCart() {
    dataProducts.map((value) => ({
      ...value,
      [value.quantity]: 0,
    }));
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
          disabled={ totalPrice === 0 }
          data-testid="customer_products__button-cart"
          onClick={ handleOnClickButtonCart }
        >
          Ver Carrinho: R$
          <style.TextTotalCart data-testid="customer_products__checkout-bottom-value">
            {totalPrice.toFixed(2).replace('.', ',')}
          </style.TextTotalCart>
        </style.ButtonCart>
      </Link>
    </style.ContainerListCard>
  );
}

export default CardsProducts;
