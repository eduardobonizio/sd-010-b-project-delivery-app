import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductTableListCard = (
  { index, description, quantity, pricePerUnit, removeBtn },
) => {
  const DESC_SIZE_W_REMOVEBTN = 7;
  const DESC_SIZE_WO_REVOMEBTN = 9;
  const DESC_SIZE = (!removeBtn) ? DESC_SIZE_WO_REVOMEBTN : DESC_SIZE_W_REMOVEBTN;

  const location = useLocation();
  const [dataTestIdPreffix, setDataTestIdPreffix] = useState('');

  const totalPrice = () => quantity * pricePerUnit;

  useEffect(() => {
    if (location.pathname === / \/customer\/checkout /) {
      setDataTestIdPreffix('customer_checkout');
    }
    if (location.pathname === / \/customer\/order /) {
      setDataTestIdPreffix('customer_order_details');
    }
  }, [location.pathname]);

  return (
    <Grid direction="row" alignItems="center" container columns={ 16 }>
      <Grid item xs>
        <Box
          textAlign="center"
          data-testid={ `${dataTestIdPreffix}__element-order-table-item-number-${index}` }
        >
          { index + 1 }
        </Box>
      </Grid>
      <Grid item xs={ DESC_SIZE }>
        <Box data-testid={ `${dataTestIdPreffix}__element-order-table-name-${index}` }>
          { description }
        </Box>
      </Grid>
      <Grid item xs={ 2 }>
        <Box
          textAlign="center"
          data-testid={ `${dataTestIdPreffix}__element-order-table-quantity-${index}` }
        >
          { quantity }
        </Box>
      </Grid>
      <Grid item xs={ 2 }>
        <Box
          textAlign="center"
          data-testid={ `${dataTestIdPreffix}__element-order-table-unit-price-${index}` }
        >
          {`R$ ${pricePerUnit}`}
        </Box>
      </Grid>
      <Grid item xs={ 2 }>
        <Box
          textAlign="center"
          data-testid={ `${dataTestIdPreffix}__element-order-table-sub-total-${index}` }
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
                  `${dataTestIdPreffix}__element-order-table-remove-${index}`
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
};

export default ProductTableListCard;
