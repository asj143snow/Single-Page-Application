import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">OFF-ROAD Adventure</div>

      
      <button 
        className="toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;