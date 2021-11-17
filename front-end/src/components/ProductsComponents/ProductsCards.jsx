import React, { useContext } from 'react';
import { Context } from '../../provider/Provider';
import fixPrice from '../../helper/functions/fixPrice';
import '../../styles/ProductsCards.css';

const handleProductsObjectsToOrders = (el, signal = 'mais', quantity = 0) => {
  const { id, name, price, url } = el;
  if (signal === 'mais') {
    return {
      id, name, price, url, quantity: quantity + 1,
    };
  }
  return {
    id, name, price, url, quantity: quantity - 1,

  };
};

const ProductsCards = () => {
  const { products, setOrderInProgress, orderInProgress,
    setTotalOrder, totalOrder } = useContext(Context);

  const handleSetOrderPositive = (el) => {
    const arr = orderInProgress.filter(({ id }) => id === el.id);
    const arrRest = orderInProgress.filter(({ id }) => id !== el.id);
    if (arr.length === 0) {
      console.log('lenght 0', arr);
      return setOrderInProgress([
        ...orderInProgress, handleProductsObjectsToOrders(el),
      ]);
    }
    if (arr.length > 0) {
      return setOrderInProgress(
        arrRest.concat(handleProductsObjectsToOrders(el, 'mais', arr[0].quantity)),
      );
    }
  };

  const handleClick = (el, name) => {
    if (name === '+') {
      handleSetOrderPositive(el);

      const total = totalOrder + parseFloat(el.price);
      return setTotalOrder(parseFloat(total.toFixed(2)));
    }
    // }
    const arrToRemove = orderInProgress.filter(({ id }) => id === el.id);
    const arrRest = orderInProgress.filter(({ id }) => id !== el.id);

    if (arrToRemove.length > 0 && arrToRemove[0].quantity) {
      console.log(arrToRemove, 'arr to remove');
      setOrderInProgress(arrRest
        .concat(handleProductsObjectsToOrders(el, 'menos', arrToRemove[0].quantity)));

      const total = totalOrder - parseFloat(el.price);
      return setTotalOrder(parseFloat(total.toFixed(2)));
    }
  };

  const handleQuantity = (el) => {
    if (orderInProgress.length < 1) return 0;
    const arr = orderInProgress.filter((data) => data.id === el.id);
    if (arr.length === 1) {
      console.log('eu existo ');
      return arr[0].quantity;
    }
    return arr.length;
  };

  return (
    <div className="div-mainDiv">
      {products && products.map((el) => (
        <section key={ el.id } className="cards-sections">
          <div className="div-price">
            <p data-testid={ `customer_products__element-card-price-${el.id}` }>
              R$
              {' '}
              {fixPrice(el.price)}
            </p>
          </div>
          <img
            src={ el.url }
            alt={ el.name }
            data-testid={ `customer_products__img-card-bg-image-${el.id}` }
            className="imgs-element-cards"
          />
          <div className="div-btn-mainDiv">
            <h4
              data-testid={ `customer_products__element-card-title-${el.id}` }
            >
              {el.name}
            </h4>
            <div className="div-btn-handlers">
              <button
                type="button"
                data-testid={ `customer_products__button-card-rm-item-${el.id}` }
                className="btn-handlers"
                name="-"
                onClick={ ({ target: { name } }) => handleClick(el, name) }
              >
                -
              </button>
              <p
                data-testid={ `customer_products__input-card-quantity-${el.id}` }
                className="btn-handlers"
              >
                {handleQuantity(el)}
              </p>
              <button
                type="button"
                data-testid={ `customer_products__button-card-add-item-${el.id}` }
                className="btn-handlers"
                name="+"
                onClick={ ({ target: { name } }) => handleClick(el, name) }
              >
                +
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductsCards;
