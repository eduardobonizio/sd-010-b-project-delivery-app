import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getFromLocalStorage } from '../services/servicesLocalStorage';
import NavBar from './component/navbar';
import Context from '../provider/Context';
import CardProduct from './component/cardProduct';

function Produtos() {
  const [products, setProducts] = useState([]);
  console.log(products);

  const getlogin = () => {
    const login = getFromLocalStorage('login_delivery');
    return login;
  };

  const {
    User,
    // setUser
  } = useContext(Context);
  console.log(User, 'user', getlogin());

  const getProducts = async () => {
    const path = 'http://localhost:3001/customer/products';
    const { data } = await axios.get(path);

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>tela de produtos</h1>
      <div className="products">
        {products.map(({ id, name, price, url_image: urlImage }) => (
          <CardProduct
            key={ id }
            id={ id }
            name={ name }
            price={ price }
            url_image={ urlImage }
          />))}
      </div>

    </div>
  );
}

export default Produtos;
