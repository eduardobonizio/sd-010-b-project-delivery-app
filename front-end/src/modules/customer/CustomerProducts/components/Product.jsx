import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCustomer } from '../../../../hooks/useCustomer';
import { formatSaveAndRenderPrice } from '../../../../helpers/functions';

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
    <div className="col" style={ { maxWidth: '250px', maxHeight: '250px' } }>
      <button
        type="button"
        onClick={ () => setQuantity(quantity + 1) }
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        add
      </button>
      <input
        className="form-control"
        type="text"
        value={ String(quantity) }
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        style={ { color: 'black' } }
        onChange={ (e) => setQuantity(e.target.value) }
      />
      <button
        type="button"
        onClick={ () => setQuantity(quantity - 1) }
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        remove
      </button>
      <div className="col-2">
        <div>
          <img
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            alt={ product.name }
            src={ product.urlImage }
            width="100%"
          />
          <div>
            <div
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              {formatSaveAndRenderPrice(product.price)}
            </div>
          </div>
          <div
            className="text-center mb-0"
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }
          </div>
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
