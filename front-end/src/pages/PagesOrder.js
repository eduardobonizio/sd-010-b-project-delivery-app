import React from 'react';
import DetailsOrder from '../components/DetailsOrder';
import Total from '../components/Total';

function PageOrder() {
  return (
    <>
      <h1>Cheguei</h1>
      <DetailsOrder isRemoveBtn />
      <Total />
    </>
  );
}

export default PageOrder;
