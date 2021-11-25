import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import getCustomerOrders from '../api/getCustomerOrders';

import StatusProductCard from '../components/StatusProductCard';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // const userLS = JSON.parse(localStorage.getItem('user'));
    const callbackAsync = async () => {
      const testId = 3;
      const customerOrders = await getCustomerOrders(testId);
      setOrders(customerOrders.data);
    };

    callbackAsync();
  }, []);

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/customer/orders/${id}`);
  };

  const renderOrders = () => (Array.isArray(orders) ? orders.map((order, index) => (
    <Grid item key={ order.sale_date } xs={ 6 }>
      <StatusProductCard
        index={ index }
        orderNum={ index + 1 }
        orderDate={ order.sale_date }
        price={ order.total_price }
        status={ order.status }
        testIdPreffix="customer_orders"
        onClick={ () => handleClick(order.id) }
      />
    </Grid>
  )) : null);

  return (
    <Container>
      <Grid container rowSpacing={ 1 } columnSpacing={ 2 }>
        { renderOrders() }
      </Grid>
    </Container>
  );
}

export default CustomerOrders;
