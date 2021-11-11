import { Container, Stack, Typography } from '@mui/material';
import { ButtonUnstyled } from '@mui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ value, description, img }) {
  const [quantity, setQuantity] = useState(0);

  return (
    // TODO: Remove inline styles
    <Container style={ { width: '200px' } }>
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
    </Container>
  );
}

ProductCard.defaultProps = {
  value: 0,
  description: 'Descrição',
  img: 'https://i.pinimg.com/200x150/fa/46/03/fa460302f7f057a12d1efc992e225848.jpg',
};

ProductCard.propTypes = {
  value: PropTypes.number,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default ProductCard;
