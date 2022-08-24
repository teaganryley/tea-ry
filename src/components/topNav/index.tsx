import React from 'react';
import { Link } from 'react-router-dom';

const TopNav: React.FC = () => (
  <header>
    <h1> T E A</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>
  </header>
);

export default TopNav;
