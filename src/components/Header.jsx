import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src={logo} width="90px" alt="Logo" />
          </Link>
        </div>
        
        <div className="title">
          <Link to="/">SHD Virtual Construction Partners</Link>
          <h2> | From Model to Field Execution</h2>
        </div>
      </div>

      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Menu
      </button>

      <div className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/contact" className="contact-link">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;