import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg'; 
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav className="navbar">
    <img src={logo} alt="Logo" className="navbar-logo" />
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/new">New Post</Link>
    </div>
  </nav>
);