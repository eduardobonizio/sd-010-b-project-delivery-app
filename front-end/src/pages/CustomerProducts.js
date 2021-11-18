import React, { useEffect, useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { Context } from '../context/ContextGlobal';

function CustomerProducts() {
  const { products, setProducts } = useContext(Context);
  const [increaseQuantity, setIncreaseQuantity] = useState(0);

  const URL = 'http://localhost:3001/customer/products';

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get(URL);
      setProducts(data);
    };

    getAllProducts();
  }, [setProducts]);

  const incrementa = (id) => {
    // const products2 = products;
    // const productsFind = products2.find((product) => product.id === id);

    console.log(increaseQuantity);

    setIncreaseQuantity((oldState) => oldState[id] + 1);

    // const key = products2.indexOf(productsFind);
    // // products2[key].count += 1;
    // // console.log(key);
    // // setProducts(products2);
    // setIncreaseQuantity((oldState) => oldState + 1);
  };

  return (
    <div>
      <NavBar />
      {products.map(({ id, name, url_image: urlImage, price }) => (
        <Card style={ { width: '18rem', height: '18rem' } } key={ id }>
          <Card.Body>
            <Card.Title
              data-testid={ `customer_products__element-card-title-${id}` }
            >
              { name }
            </Card.Title>
            <Card.Text
              data-testid={ `customer_products__element-card-price-${id}` }
            >
              { price.replace('.', ',') }
            </Card.Text>
            <Card.Img
              data-testid={ `customer_products__img-card-bg-image-${id}` }
              src={ urlImage }
            />
          </Card.Body>
          <div>
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              onClick={ () => incrementa(id) }
            >
              +
            </button>
            <input
              type="text"
              value={ increaseQuantity }
              data-testid={ `customer_products__input-card-quantity-${id}` }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${id}` }
            >
              -
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CustomerProducts;
