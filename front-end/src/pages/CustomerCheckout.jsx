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

import APICalls from '../services/APICalls';

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

  const {
    sellerId,
    userId,
    userAddress,
    userAddressNumber,
  } = useContext(UsersContext);

  const {
    totalPrice: totalPriceContext,
  } = useContext(ProductsContext);

  const history = useHistory();

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
          pricePerUnit={ unitPrice }
          removeBtn
          testIdPreffix="customer_checkout"
          onClick={ handleOnClickRemove }
        />
      ),
    ) : null;

    return mappedRenderProducts;
  };

  const handleOnClickCheckout = async () => {
    const createdSale = await APICalls.createSale({
      user_id: userId,
      seller_id: sellerId,
      delivery_address: userAddress,
      delivery_number: userAddressNumber,
      total_price: totalPriceContext,
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
