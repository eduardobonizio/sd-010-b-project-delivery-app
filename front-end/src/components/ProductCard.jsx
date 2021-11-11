import { Stack, Typography } from '@mui/material';
import { ButtonUnstyled } from '@mui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

function ProductCard({ value, description, img }) {
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
          style={ { width: '200px', height: '150px' } }
          alt="imagem produto"
          src={ img }
        />
        <Typography>{value}</Typography>
        <Typography>{description}</Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={ 0 }
        >
          <ButtonUnstyled onClick={ () => setQuantity(quantity - 1) }>-</ButtonUnstyled>
          <input
            style={ { maxWidth: '25px', minWidth: '25px', textAlign: 'center' } }
            value={ quantity }
          />
          <ButtonUnstyled onClick={ () => setQuantity(quantity + 1) }>+</ButtonUnstyled>
        </Stack>
      </Stack>
    </Box>
  );
}

ProductCard.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductCard;
