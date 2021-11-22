import React from 'react';
import DetailsOrder from '../components/DetailsOrder';
import Total from '../components/Total';
import Header from '../components/Header';
import Order from '../components/Order';

function PageOrder() {
  return (
    <>
      <header>
        <Header />
      </header>
      <DetailsOrder isRemoveBtn />
      <Total />
      <Order />
    </>
  );
}

export default PageOrder;
