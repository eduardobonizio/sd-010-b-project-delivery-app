import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import cardFields from '../services/cardFields';

import { useProductContext } from '../context/productContext';

function Products() {
  const { cart, products, handleQuantityInput, handleCart,
    handleTotalValue, handleQuantity } = useProductContext();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <Navbar />
      <h1>Produtos</h1>
      <div className="card__container">
        {products.map((el) => (
          <ProductCard
            key={ el.id }
            key={ el.id }
            product={ el }
            handleQuantityInput={ handleQuantityInput }
            handleCart={ handleCart }
            cart={ cart }
            handleQuantity={ handleQuantity }
          />
        ))}
      </div>
      <button
        type="button"
        onClick={ handleRedirect }
        disabled={ !cart.length }
        data-testid="customer_products__button-cart"
      >
        <p data-testid="customer_products__checkout-bottom-value">
          {handleTotalValue().replace('.', ',')}
        </p>
      </button>
    </div>
  );
}

export default Products;
