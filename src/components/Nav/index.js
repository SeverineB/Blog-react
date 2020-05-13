import React from 'react';

import './style.scss';

const Nav = () => (
  <nav className="nav-menu">
    <ul>
      <li className="nav-menu-item">
        <a className="nav-menu-link">Accueil</a>
      </li>
      <li className="nav-menu-item">
        <a className="nav-menu-link">Angular</a>
      </li>
      <li className="nav-menu-item">
        <a className="nav-menu-link">React</a>
      </li>
      <li className="nav-menu-item">
        <a className="nav-menu-link">O'clock</a>
      </li>
      <li className="nav-menu-item">
        <a className="nav-menu-link">Autre</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
