import React from 'react';
import { Grid, Typography } from '@mui/material';

const ProductTableHeader = () => (
  <Grid direction="row" alignItems="center" container columns={ 16 }>
    <Grid item xs><Typography textAlign="center">Item</Typography></Grid>
    <Grid item xs={ 7 }><Typography textAlign="center">Descrição</Typography></Grid>
    <Grid item xs={ 2 }><Typography textAlign="center">Quantidade</Typography></Grid>
    <Grid item xs={ 2 }>
      <Typography textAlign="center">Valor Unitário</Typography>
    </Grid>
    <Grid item xs={ 2 }><Typography textAlign="center">Sub-Total</Typography></Grid>
    <Grid item xs={ 2 }><Typography textAlign="center">Remover Item</Typography></Grid>

  </Grid>
);

export default ProductTableHeader;
