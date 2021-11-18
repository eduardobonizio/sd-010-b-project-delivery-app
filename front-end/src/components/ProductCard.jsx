import { Stack, Typography } from '@mui/material';
import { ButtonUnstyled } from '@mui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
// import Chip from '@mui/material/Chip';

function ProductCard({ name, value, image, price, id }) {
  const [quantity, setQuantity] = useState(0);
  return (
    // TODO: Remove inline styles
    <Box style={ { width: '200px' } }>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={ 0.5 }
      >
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          style={ { height: '150px' } }
          alt={ name }
          src={ image }
        />
        <Typography
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </Typography>
        <Typography
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {value}
        </Typography>
        <Typography>{price}</Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={ 0 }
        >
          <ButtonUnstyled
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            } }
          >
            -
          </ButtonUnstyled>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
          />
          {/* <Chip
            data-testid={ `customer_products__input-card-quantity-${id}` }
            label={ quantity }
            variant="outlined"
          /> */}
          <ButtonUnstyled
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => setQuantity(quantity + 1) }
          >
            +

          </ButtonUnstyled>
        </Stack>
      </Stack>
    </Box>
  );
}

ProductCard.propTypes = {
  value: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
