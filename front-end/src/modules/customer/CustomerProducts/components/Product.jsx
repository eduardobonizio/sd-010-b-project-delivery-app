import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCustomer } from '../../../../hooks/useCustomer';
import { formatSaveAndRenderPrice } from '../../../../helpers/functions';
import './Product.scss';

function Product({ product }) {
  // const prodBg = 'https://static.paodeacucar.com/img/uploads/1/241/693241.jpg';
  const cart = JSON.parse(localStorage.getItem('cart'));
  const { handleTotalSale, handleRemoveItemCart } = useCustomer();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (cart) {
      cart.forEach((prodId) => {
        if (prodId.productId === product.id) {
          setQuantity(prodId.quantity);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (quantity > 0) {
      const numQtd = Number(quantity);
      const sale = {
        ...product,
        quantity: numQtd,
      };
      setQuantity(numQtd);
      return handleTotalSale(sale);
    }
    if (quantity === 0) {
      handleRemoveItemCart(product.id);
    }
    if (quantity < 0) {
      return setQuantity(0);
    }
  }, [quantity]);

  return (
    <div className="col-2 card-container">
      <div className="row d-flex flex-column">
        <div className="col product-price">
          <div
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {formatSaveAndRenderPrice(`R$ ${product.price}`)}
          </div>
        </div>
        <div
          className="col d-flex justify-content-center"
        >
          <div
            style={ {
              backgroundImage: `url(${product.urlImage})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              width: '100px',
              height: '100px',
            } }
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="text-center mb-0"
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-2 d-flex justify-content-right m-0 p-0">
          <button
            className="w-100 btn btn-warning"
            type="button"
            onClick={ () => setQuantity(quantity - 1) }
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
        </div>
        <div className="col-4 m-0 p-0">
          <input
            className="form-control"
            type="text"
            value={ String(quantity) }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            style={ { color: 'black' } }
            onChange={ (e) => setQuantity(e.target.value) }
          />
        </div>
        <div className="col-2 m-0 p-0">
          <button
            className="w-100 btn btn-warning"
            type="button"
            onClick={ () => setQuantity(quantity + 1) }
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};
