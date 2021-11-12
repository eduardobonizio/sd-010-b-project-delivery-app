import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
  <Box>
    <CardContent>
      <Typography
        data-testid="customer_products__element-card-title-"
        sx={ { fontSize: 14 } }
        color="text.secondary"
        gutterBottom
      >
        Nome/Título do Produto
      </Typography>
      <Typography
        data-testid="customer_products__element-card-price-"
        variant="h5"
        component="div"
      >
        Preço: R$ 0,00
      </Typography>
      <Typography
        data-testid="customer_products__img-card-bg-image-"
        sx={ { mb: 1.5 } }
        color="text.secondary"
      >
        Imagem
      </Typography>
    </CardContent>
    <CardActions>
      <Button data-testid="customer_products__button-card-rm-item-">Remover</Button>
      <input
        data-testid="customer_products__input-card-quantity-"
        type="number"
        title="quantidade de ítens"
      />
      <Button data-testid="customer_products__button-card-add-item-">Adicionar</Button>
    </CardActions>
  </Box>
);

function OutlinedCard() {
  return (
    <Box sx={ { minWidth: 275 } }>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default OutlinedCard;
