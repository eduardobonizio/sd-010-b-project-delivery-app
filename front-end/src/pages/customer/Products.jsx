import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import ButtonSeeCart from '../../components/ButtonSeeCart';

function Products() {
  const [isLoading, setIsLoading] = useState(true);
  // const { productId } = useContext(Logincontext);
  const [data, setData] = useState([]);

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

  return (
    <div>
      <NavBar />
      { isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div
          id="deck"
          style={ { display: 'flex', flexWrap: 'wrap', padding: '80px 30px' } }
        >
          { data.map(({ id, name, url_image: image, price }) => (
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
      <div style={ { display: 'flex', flexDirection: 'row-reverse' } }>
        <ButtonSeeCart />
      </div>
    </div>
  );
}

export default Products;
