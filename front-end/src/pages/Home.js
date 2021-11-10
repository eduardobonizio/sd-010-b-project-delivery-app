import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

export default function Home() {
  // o location retorna o local onde está
  const location = useLocation();
  const simulationLocalStorage = false;
  // Uso dessa variavel somente para simular um localStorage caso n houvesse nenhum login feito
  return (
    <div>
      { !simulationLocalStorage && <Navigate to="/login" state={ { from: location } } /> }
      <h1>Home</h1>
    </div>
  );
}
