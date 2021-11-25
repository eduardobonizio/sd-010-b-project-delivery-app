import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useProductContext } from '../context/productContext';

function Products() {
  const { cart, products, handleQuantityInput, handleCart,
    handleQuantity } = useProductContext();
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const handleRedirect = () => {
    history.push('/customer/checkout');
  };

  useEffect(() => {
    const handleTotalValue = (carrinho) => {
      const zero = 0;
      if (!carrinho.length) setTotal(zero.toFixed(2));
      const newTotal = carrinho.reduce((acc, curr) => acc + +curr.price * curr.qty, 0);
      setTotal(newTotal.toFixed(2));
    };
    handleTotalValue(cart);
  }, [cart]);

  return (
    <div>
      <Navbar />
      <h1>Produtos</h1>
      <div className="card__container">
        {products.map((el) => (
          <ProductCard
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
          {total.toString().replace('.', ',')}
        </p>
      </button>
    </div>
  );
}

export default Products;
