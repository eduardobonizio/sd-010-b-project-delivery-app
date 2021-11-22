import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import Logincontext from '../../context/LoginContext';

function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const { totalPrice } = useContext(Logincontext);

  if (localStorage.getItem('carrinho') === null) {
    localStorage.setItem('carrinho', '0');
  }

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((result) => {
        setIsLoading(false);
        setData(result.data);
      });
  }, []);

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <div>
      <NavBar />
      { isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div id="deck">
          {data.map(({ id, name, url_image: image, price }) => (
            <ProductCard
              key={ id }
              id={ id }
              name={ name }
              image={ image }
              price={ price }
            />
          ))}
        </div>
      )}
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        value={ totalPrice.toFixed(2) }
        onClick={ handleClick }
      >
        { totalPrice.toFixed(2).replace('.', ',') }
      </button>
    </div>
  );
}

export default Products;
