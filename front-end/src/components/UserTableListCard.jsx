import React from 'react';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const UserTableListCard = (
  { index, username, userEmail, userRole },
) => (
  <Grid direction="row" alignItems="center" container columns={ 16 }>
    <Grid item xs><Box textAlign="center">{ index }</Box></Grid>
    <Grid item xs={ 4 }><Box>{ username }</Box></Grid>
    <Grid item xs={ 5 }><Box textAlign="center">{ userEmail }</Box></Grid>
    <Grid item xs={ 4 }><Box textAlign="center">{ userRole }</Box></Grid>
    <Grid item xs={ 2 }><Box><Button>Excluir</Button></Box></Grid>
  </Grid>
);

UserTableListCard.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  username: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default UserTableListCard;
