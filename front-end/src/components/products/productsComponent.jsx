import React, { useState, useEffect } from 'react';
import ButtonItens from './buttonItens';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  return (
    <section>
      <div className="card-container">
        { products.map((elem) => (
          <div key={ elem.id } className="card-products">
            <p
              data-testid={ `customer_products__element-card-price-${elem.id}` }
            >
              { `R$ ${elem.price}` }
            </p>
            <img
              data-testid={ `customer_products__img-card-bg-image-${elem.id}` }
              src={ elem.url_image }
              alt={ elem.name }
            />
            <div className="div-buttons-products">
              <p
                data-testid={ `customer_products__element-card-title-${elem.id}` }
              >
                { elem.name }
              </p>
              <ButtonItens elem={ elem } key={ elem.id } id={ elem.id } />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
