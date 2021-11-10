import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/"><div>PRODUTOS</div></Link>
      <Link to="/"><div>MEUS PRODUTOS</div></Link>
      <Link to="/"><div>CICRANO DA SILVA</div></Link>
      <Link to="/"><div>Sair</div></Link>
    </header>
  );
}

export default Header;
