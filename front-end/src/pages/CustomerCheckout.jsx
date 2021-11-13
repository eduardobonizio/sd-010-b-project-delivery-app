import {
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';
import CartForm from '../components/CartForm';
import ProductTableHeader from '../components/ProductTableHeader';
import ProductTableListCard from '../components/ProductTableListCard';

// Just for testing until macro requirement 3 isn't finished
const PRODUCT_OBJ_ARRAY = [{
  id: 1,
  description: 'Skol Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 2,
  description: 'Império Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 3,
  description: 'Brahma Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 4,
  description: 'Budweiser Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 5,
  description: 'Stella Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 6,
  description: 'Coca Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 7,
  description: 'Pespi Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 8,
  description: 'Guarana Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 9,
  description: 'Agua Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 10,
  description: 'Tequila Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
{
  id: 11,
  description: 'Leite Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
},
];
// ---------------------------------------------------------
function CustomerCheckout() {
  // Just for testing until macro requirement 3 isn't finished
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    localStorage.setItem('customerCart', JSON.stringify(PRODUCT_OBJ_ARRAY));
    setRefresh(true);
  }, []);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('customerCart');
    if (getLocalStorage) setProducts(JSON.parse(getLocalStorage));
    setRefresh(false);
  }, [refresh]);
  // ---------------------------------------------------------
  const renderCartItems = () => {
    const mappedRenderProducts = Array.isArray(products) ? products.map(
      ({ id, description, quantity, unitPrice }, index) => (
        <ProductTableListCard
          key={ id }
          index={ index }
          description={ description }
          quantity={ quantity }
          pricePerUnit={ unitPrice }
          removeBtn
        />
      ),
    ) : null;

    return mappedRenderProducts;
  };

  const calculateTotalPrice = () => {
    const totalPrice = Array.isArray(products) ? products.reduce(
      (sum, { quantity, unitPrice }) => sum + quantity * unitPrice,
      0,
    ) : null;

    // SOURCE: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    return Math.ceil(totalPrice * 100) / 100;
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
          data-testId="customer_checkout__element-order-total-price"
        >
          {`Total: R$ ${calculateTotalPrice()}`}
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
            data-testId="customer_checkout__button-submit-order"
          >
            FINALIZAR PEDIDO

          </Button>
        </Stack>
      </Container>
    </main>
  );
}

export default CustomerCheckout;
