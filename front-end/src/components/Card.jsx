import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Context from '../context/Context';

function Card(props) {
  // const { setTotaPrice } = useContext(Context);
  const [quantity, setQuantity] = useState(0);
  const [carrinho, setCarrinho] = useState({});
  const { item } = props;
  const { price, name, id } = item;
  const history = useHistory();
  const CARRINHO_DE_COMPRAS = 'Carrinho de Compras';
  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    history.push({ pathname: '/customer/products' });
  };

  useEffect(() => {
    setLocalStorage(CARRINHO_DE_COMPRAS, carrinho);
  }, [carrinho]);

  const handleClickIncrease = () => {
    const loadStorage = localStorage.getItem(CARRINHO_DE_COMPRAS);
    const storeObjeto = JSON.parse(loadStorage);
    const newCarrinho = {
      ...storeObjeto,
      [id]: {
        name,
        quantity: (quantity + 1),
        totalPrice: (price * (quantity + 1)).toFixed(2) },
    };

    setCarrinho(newCarrinho);
    setQuantity(quantity + 1);
    setLocalStorage(CARRINHO_DE_COMPRAS, newCarrinho);
  };

  const handleClickDecrease = () => {
    const loadStorage = localStorage.getItem(CARRINHO_DE_COMPRAS);
    const storeObjeto = JSON.parse(loadStorage);
    const newCarrinho = {
      ...storeObjeto,
      [id]: {
        name,
        quantity: (quantity - 1),
        totalPrice: (price * (quantity - 1)).toFixed(2) },
    };
    setCarrinho(newCarrinho);
    setQuantity(quantity - 1);
    setLocalStorage(CARRINHO_DE_COMPRAS, newCarrinho);
  };

  const handleOnchage = (target) => {
    setQuantity(Number(target.value));
  };

  return (
    <main>
      <div className="card">
        <section>
          <h1
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            {`R$ ${price.replace(/\./, ',')}`}
          </h1>
          <img
            src={ item.url_image }
            alt="Descrição da Imagem"
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            width="100px"
          />
          <h5
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}
          </h5>
        </section>
        <section>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            title="diminuir"
            onClick={ () => handleClickDecrease() }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="text"
            title="quantidade de ítens"
            onChange={ () => handleOnchage() }
            value={ quantity }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            title="aumentar"
            onClick={ () => handleClickIncrease() }
          >
            +
          </button>
        </section>
      </div>
    </main>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};

export default Card;
