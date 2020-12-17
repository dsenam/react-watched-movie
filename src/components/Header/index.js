import React from 'react';
import { Link } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <Link to="/">
          <RiMovie2Line size={60} color="#fff" />
        </Link>
      </div>

      <nav>
        <Link to="/">Para assistir</Link>

        <Link to="/watched">Assistidos</Link>

        <button type="button">
          <Link to="/add">Adicionar</Link>
        </button>
      </nav>
    </Container>
  );
}

export default Header;
