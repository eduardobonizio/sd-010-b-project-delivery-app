import React from 'react';
import Header from '../components/Header';
import RegisterFormAdm from '../components/RegiterFormAdm';

function AdmPage() {
  return (
    <>
      <Header userRole="administrator" />
      <RegisterFormAdm />
    </>
  );
}

export default AdmPage;
