import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Logo,
} from './styles';

import logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <Container>
    <Link to="/">
      <Logo src={logo} alt="Star Wars" />
    </Link>
  </Container>
);

export default Header;
