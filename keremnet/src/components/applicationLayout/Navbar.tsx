import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg'; 

export const Navbar: React.FC = () => (
  <nav className="navbar">
    <img src={logo} alt="Logo" className="navbar-logo" />
    <div className="navbar-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  </nav>
);