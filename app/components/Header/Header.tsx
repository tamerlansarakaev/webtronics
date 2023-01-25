import React from 'react';
import { ReactSVG } from 'react-svg';

export default function Header() {
  const logoHeader = require('../../../public/logo header.svg').default.src;
  return (
    <header className="header">
      <ReactSVG src={logoHeader} color="#000" className="logo-header" />
      <nav className="menu-nav">
        <ul className="menu">
          <li className="menu-item">About</li>
          <li className="menu-item">Programs</li>
          <li className="menu-item">Steps</li>
          <li className="menu-item">Questions</li>
          <li className="menu-item">Get in touch</li>
        </ul>
      </nav>
    </header>
  );
}
