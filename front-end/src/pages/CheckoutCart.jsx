import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import axios from 'axios';
import TopBar from '../components/TopBar';
import CheckoutProductCard from '../components/CheckoutProductCard';
import CheckoutCartTotal from '../components/CheckoutCartTotal';
import CheckoutDeliveryData from '../components/CheckoutDeliveryData';
import './css/Products.css';

function Products() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [cart, setCart] = useState();
  const [cartTotal, setCartTotal] = useState(0);
  // const history = useHistory();

  useEffect(() => {
    const getLocalStorageCartItens = async () => {
      const localCart = JSON.parse(localStorage.getItem('cart'));
      const olyItensInCart = localCart.filter((e) => e.quantity > 0);
      setCart(olyItensInCart);
    };
    getLocalStorageCartItens();
  }, []);

  useEffect(() => {
    let sum = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cart) {
      cart.forEach((element) => {
        sum += element.price * element.quantity;
      });
    }
    setCartTotal(sum);
  }, [cart]);

  const finishSale = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const sendSale = {
      token,
      totalPrice: cartTotal,
      products: cart,
    };
    const saleId = await axios.post('http://localhost:3001/customer/checkout', sendSale);
    console.log(saleId);
    // const tempSaleIdToKeepDoingProject = 1;
    // history.push(`/customer/orders/${tempSaleIdToKeepDoingProject}`);

    // front total_price
    // front delivery_address
    // front?jwt? user_id
    // back delivery_number
    // back sale_date
    // back status
    // back? seller_id
  };

  return (
    <>
      <TopBar name={ name } />
      <div className="products-container">
        {
          cart && cart.map((product) => (
            <CheckoutProductCard
              key={ product.key }
              product={ product }
              setCart={ setCart }
              cart={ cart }
            />
          ))
        }
        <CheckoutCartTotal cartTotal={ cartTotal } />
      </div>
      <div>Detalhes e Endereço para Entrega</div>
      <CheckoutDeliveryData finishSale={ finishSale } />
    </>
  );
}

export default Products;
