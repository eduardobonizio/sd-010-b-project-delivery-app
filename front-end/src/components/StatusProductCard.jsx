import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

function StatusProductCard(
  { index, orderNum, status, orderDate, price, address, testIdPreffix },
) {
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
          <Typography
            data-testid={ `${testIdPreffix}__element-order-id-${index}` }
          >
            {orderNum}
          </Typography>
        </Stack>
        <Box>
          <Typography
            variant="h5"
            data-testid={ `${testIdPreffix}__element-delivery-status-${index}` }
          >
            { status }
          </Typography>
        </Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={ 2 }
        >
          <Typography
            data-testid={ `${testIdPreffix}__element-order-date-${index}` }
          >
            { orderDate }
          </Typography>
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
  address: null,
};

StatusProductCard.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  orderNum: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  address: PropTypes.string,
  testIdPreffix: PropTypes.string.isRequired,
};

export default StatusProductCard;
