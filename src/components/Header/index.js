import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <div>
          <Link to="/">WatchList</Link>
        </div>

        <ul>
          <li>
            <Link to="/">WatchList</Link>
          </li>

          <li>
            <Link to="/watched">Watched</Link>
          </li>

          <li>
            <Link to="/add">+ Add</Link>
          </li>
        </ul>
      </Content>
    </Container>
  );
}

export default Header;
