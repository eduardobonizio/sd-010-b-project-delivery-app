import {
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import CartForm from '../components/CartForm';
import ProductTableHeader from '../components/ProductTableHeader';
import ProductTableListCard from '../components/ProductTableListCard';

import UsersContext from '../context/Users/UsersContext';
import ProductsContext from '../context/Products/ProductsContext';

import createSale from '../api/createSale';

function CustomerCheckout() {
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const [formatedProducts, setFormatedProducts] = useState([]);

  const {
    sellerId,
    userId,
    userAddress,
    userAddressNumber,
  } = useContext(UsersContext);

  const {
    totalPrice: totalPriceContext,
    setTotalPrice: setTotalPriceContext,
  } = useContext(ProductsContext);

  const history = useHistory();

  const calculateTotalPrice = (productsLS) => {
    const totalPrice = Array.isArray(productsLS) ? productsLS.reduce(
      (sum, { quantity, unitPrice }) => (
        sum + quantity * parseFloat(unitPrice.replace(',', '.')).toFixed(2)), 0,
    ) : 0;

    setTotalPriceContext(totalPrice);
    return totalPrice;
  };

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('customerCart');
    if (getLocalStorage) setProducts(JSON.parse(getLocalStorage));
    const productsFormatter = () => {
      if (!getLocalStorage) return;
      const parsedLS = JSON.parse(getLocalStorage);
      const format = parsedLS.map((product) => (
        { product_id: product.id, quantity: product.quantity }
      ));

      setFormatedProducts(format);
    };

    productsFormatter();
  }, [refresh]);
  // ---------------------------------------------------------
  const handleOnClickRemove = (index) => {
    const filterRenderProducts = Array.isArray(products)
      ? products.filter((product, pIndex) => (
        pIndex !== index
      )) : null;
    localStorage.setItem('customerCart', JSON.stringify(filterRenderProducts));
    setRefresh(true);
  };

  const renderCartItems = () => {
    const mappedRenderProducts = Array.isArray(products) ? products.map(
      ({ id, description, quantity, unitPrice }, index) => (
        <ProductTableListCard
          key={ id }
          index={ index }
          description={ description }
          quantity={ quantity }
          pricePerUnit={ parseFloat(unitPrice.replace(',', '.')) }
          removeBtn
          testIdPreffix="customer_checkout"
          onClick={ handleOnClickRemove }
        />
      ),
    ) : null;

    return mappedRenderProducts;
  };

  const handleOnClickCheckout = async () => {
    const createdSale = await createSale({
      user_id: userId,
      seller_id: sellerId,
      delivery_address: userAddress,
      delivery_number: userAddressNumber,
      total_price: totalPriceContext,
      products: formatedProducts,
    });
    console.log(createdSale);
    if (createdSale.status) {
      history.push(`/customer/orders/${createdSale.data.id}`);
    }
  };

  return (
    <main data-testid="customer-checkout-page">
      <Container>
        <Typography variant="h5" component="h1">
          Finalizar Pedido
        </Typography>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={ 0 }
        >
          <ProductTableHeader />
          { renderCartItems() }
        </Stack>
        <Typography
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: R$ ${calculateTotalPrice(products).toFixed(2)}`}
        </Typography>
      </Container>
      <Container>
        <Typography variant="h5" component="h1">
          Detalhes e Endereço para Entrega
        </Typography>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={ 2 }
        >
          <CartForm />
          <Button
            variant="contained"
            data-testid="customer_checkout__button-submit-order"
            onClick={ handleOnClickCheckout }
          >
            FINALIZAR PEDIDO
          </Button>
        </Stack>
      </Container>
    </main>
  );
}

export default CustomerCheckout;
