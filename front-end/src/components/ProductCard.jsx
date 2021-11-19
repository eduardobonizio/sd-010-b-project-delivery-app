import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FetchContext from '../context/FetchContext';
// import '../App.css';
import axios from 'axios';

function ProductCard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ELEVEN = 11;

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((result) => {
        setIsLoading(false);
        setData(result.data);
      });
  }, []);

  return (
    <div>
      { isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {
            data.filter((el, index) => index <= ELEVEN)
              .map((prod) => (
                <div
                  key={ prod }
                  data-testid={ `customer_products__element-card-price-${prod.id}` }
                >
                  { prod.price }
                  <img
                    style={ { height: 200 } }
                    data-testid={ `customer_products__img-card-bg-image-${prod.id}` }
                    src={ prod.url_image }
                    alt={ prod.name }
                  />
                  <p
                    data-testid={ `customer_products__element-card-title-${prod.id}` }
                  >
                    { prod.name }
                  </p>
                  <button
                    type="button"
                    data-testid={ `customer_products__button-card-add-item-${prod.id}` }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
                  >
                    -
                  </button>
                  <input
                    data-testid={ `customer_products__input-card-quantity-${prod.id}` }
                  />
                </div>
              ))

          }
        </div>
      )}
    </div>
  );
}

export default ProductCard;
