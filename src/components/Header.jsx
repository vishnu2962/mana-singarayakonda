// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => (
//   <header className="header">
//     <h1>Mana Singarayakonda</h1>
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/services">Services</Link>
//       <Link to="/rentals">Rentals</Link>
//       <Link to="/market-prices">Market Prices</Link>
//       <Link to="/workers">Workers</Link>
//       <Link to="/news">News</Link>
//     </nav>
//   </header>
// );

// export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Mana Singarayakonda</h1>
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'active-link' : ''}>Services</NavLink>
      <NavLink to="/rentals" className={({ isActive }) => isActive ? 'active-link' : ''}>Rentals</NavLink>
      <NavLink to="/market-prices" className={({ isActive }) => isActive ? 'active-link' : ''}>Market Prices</NavLink>
      <NavLink to="/workers" className={({ isActive }) => isActive ? 'active-link' : ''}>Workers</NavLink>
      <NavLink to="/news" className={({ isActive }) => isActive ? 'active-link' : ''}>News</NavLink>
    </nav>
  </header>
);

export default Header;
