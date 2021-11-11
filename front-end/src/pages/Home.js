import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Home() {
  // Uso dessa variavel somente para simular um localStorage caso n houvesse nenhum login feito
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
}
