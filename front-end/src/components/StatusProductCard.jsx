import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

function StatusProductCard({ orderNum, status, orderDate, price, address }) {
  return (
    // TODO: remove inline style
    <Box style={ { width: '550px' } }>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={ 6 }
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={ 2 }
        >
          <Typography variant="caption">Pedido</Typography>
          <Typography>{orderNum}</Typography>
        </Stack>
        <Box><Typography variant="h5">{ status }</Typography></Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={ 2 }
        >
          <Typography>{ orderDate }</Typography>
          <Typography>{ `R$ ${price}` }</Typography>
        </Stack>
      </Stack>
      {
        address
          ? (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={ 0 }
            >
              <Typography>{address}</Typography>

            </Stack>
          ) : null
      }
    </Box>
  );
}

StatusProductCard.defaultProps = {
  orderNum: 1,
  status: 'Pendente',
  orderDate: '11/11/2021',
  price: 0,
  address: null,
};

StatusProductCard.propTypes = {
  orderNum: PropTypes.number,
  status: PropTypes.string,
  orderDate: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.string,
};

export default StatusProductCard;
