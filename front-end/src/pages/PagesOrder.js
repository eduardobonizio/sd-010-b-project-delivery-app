import React from 'react';
import DetailsOrder from '../components/DetailsOrder';
import Total from '../components/Total';
import Header from '../components/Header';

function PageOrder() {
  return (
    <>
      <header>
        <Header />
      </header>
      <DetailsOrder isRemoveBtn />
      <Total />
    </>
  );
}

export default PageOrder;
