import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="nav1">PRODUTOS</Link>
        <Link to="/" className="nav2">MEUS PRODUTOS</Link>
        <Link to="/" className="nav3">CICRANO DA SILVA</Link>
        <Link to="/" className="nav4">Sair</Link>
      </nav>
    </header>
  );
}

export default Header;
