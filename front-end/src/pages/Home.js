import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Home() {
  // o location retorna o local onde está
  const simulationLocalStorage = false;
  // Uso dessa variavel somente para simular um localStorage caso n houvesse nenhum login feito
  return (
    <div>
      { !simulationLocalStorage && <Redirect to='/login' /> }
      <h1>Home</h1>
    </div>
  );
}
