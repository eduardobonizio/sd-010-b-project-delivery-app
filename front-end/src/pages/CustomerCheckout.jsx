import {
  Container,
  Stack,
  Typography,
} from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';
import NavBar from '../components/NavBar';
import ProductTableHeader from '../components/ProductTableHeader';
import ProductTableListCard from '../components/ProductTableListCard';

// Just for testing until macro requirement 3 isn't finished
const PRODUCT_OBJ_ARRAY = [{
  id: 1,
  description: 'Skol Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 2,
  description: 'Império Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 3,
  description: 'Brahma Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 4,
  description: 'Budweiser Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 5,
  description: 'Stella Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 6,
  description: 'Coca Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 7,
  description: 'Pespi Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 8,
  description: 'Guarana Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 9,
  description: 'Agua Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 10,
  description: 'Tequila Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
},
{
  id: 11,
  description: 'Leite Lata 250ml',
  quantity: 2,
  unitPrice: 2.20,
  subTotal: 4.40,
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
    setProducts(JSON.parse(localStorage.getItem('customerCart')));
    setRefresh(false);
  }, [refresh]);
  // ---------------------------------------------------------
  return (
    <div data-testid="customer-checkout-page">
      <NavBar username="<username>" user="customer" />
      <main>
        <Container>
          <Typography variant="h4" component="h1">
            Finalizar Pedido
          </Typography>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={ 0 }
          >
            <ProductTableHeader />
            <ProductTableListCard
              index="1"
              description="Teste"
              quantity={ 3 }
              pricePerUnit={ 10.99 }
              removeBtn
            />
          </Stack>
        </Container>
      </main>
    </div>
  );
}

export default CustomerCheckout;
