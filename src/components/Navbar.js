import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">DevConnect</div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/developers">Developers</NavLink></li>
      </ul>
    </nav>
  );
}
