import React from 'react';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const ProductTableListCard = (
  { index, description, quantity, pricePerUnit, removeBtn, testIdPreffix },
) => {
  const DESC_SIZE_W_REMOVEBTN = 7;
  const DESC_SIZE_WO_REVOMEBTN = 9;
  const DESC_SIZE = (!removeBtn) ? DESC_SIZE_WO_REVOMEBTN : DESC_SIZE_W_REMOVEBTN;

  const totalPrice = () => quantity * pricePerUnit;

  return (
    <Grid direction="row" alignItems="center" container columns={ 16 }>
      <Grid item xs>
        <Box
          textAlign="center"
          data-testid={ `${testIdPreffix}__element-order-table-item-number-${index}` }
        >
          { index + 1 }
        </Box>
      </Grid>
      <Grid item xs={ DESC_SIZE }>
        <Box data-testid={ `${testIdPreffix}__element-order-table-name-${index}` }>
          { description }
        </Box>
      </Grid>
      <Grid item xs={ 2 }>
        <Box
          textAlign="center"
          data-testid={ `${testIdPreffix}__element-order-table-quantity-${index}` }
        >
          { quantity }
        </Box>
      </Grid>
      <Grid item xs={ 2 }>
        <Box
          textAlign="center"
          data-testid={ `${testIdPreffix}__element-order-table-unit-price-${index}` }
        >
          {`R$ ${pricePerUnit}`}
        </Box>
      </Grid>
      <Grid item xs={ 2 }>
        <Box
          textAlign="center"
          data-testid={ `${testIdPreffix}__element-order-table-sub-total-${index}` }
        >
          {`R$ ${totalPrice()}`}
        </Box>
      </Grid>
      {
        removeBtn
          ? (
            <Grid item xs={ 2 }>
              <Button
                data-testid={
                  `${testIdPreffix}__element-order-table-remove-${index}`
                }
              >
                Remove
              </Button>
            </Grid>
          ) : null
      }
    </Grid>
  );
};

ProductTableListCard.defaultProps = {
  removeBtn: true,
};

ProductTableListCard.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  pricePerUnit: PropTypes.number.isRequired,
  removeBtn: PropTypes.bool,
  testIdPreffix: PropTypes.string.isRequired,
};

export default ProductTableListCard;
