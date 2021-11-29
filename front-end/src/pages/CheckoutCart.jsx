import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import TopBar from '../components/navigation_bar/TopBar';
import CheckoutProductTable from '../components/checkout_cart/CheckoutProductTable';
import CheckoutDeliveryData from '../components/checkout_cart/CheckoutDeliveryData';
import { serverUrl } from '../helpers/constants';

function Products() {
  const history = useHistory();
  const [cart, setCart] = useState();
  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerId, setSellerId] = useState();
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const getLocalStorageCartItens = async () => {
      const localCart = JSON.parse(localStorage.getItem('cart'));
      const olyItensInCart = localCart.filter((e) => e.quantity > 0);
      setCart(olyItensInCart);
    };
    getLocalStorageCartItens();
  }, []);

  useEffect(() => {
    const getSellers = async () => {
      const { data } = await axios.get(`${serverUrl}/seller/all`);
      setSellers(data);
    };
    getSellers();
  }, [setSellers]);

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
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const config = {
        headers: {
          authorization: token,
        },
      };
      const newSale = {
        totalPrice: cartTotal,
        products: cart,
        deliveryAddress,
        deliveryNumber,
        sellerId,
      };

      const { data: { saleId } } = await axios.post(
        `${serverUrl}/customer/checkout`, newSale, config,
      );
      history.push(`/customer/orders/${saleId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TopBar cartTotal={ cartTotal } />
      <Container>
        <CheckoutProductTable cart={ cart } setCart={ setCart } cartTotal={ cartTotal } />
        <div>Detalhes e Endereço para Entrega</div>
        <CheckoutDeliveryData
          setDeliveryNumber={ setDeliveryNumber }
          setDeliveryAddress={ setDeliveryAddress }
          finishSale={ finishSale }
          setSellerId={ setSellerId }
          sellers={ sellers }
        />
      </Container>
    </>
  );
}
export default Products;
