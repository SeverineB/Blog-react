import React from 'react';

import './style.scss';

const Nav = () => (
  <nav className="nav-menu">
    <ul>
      <li className="nav-menu-item">
        <a className="nav-menu-link" href="">Accueil</a>
      </li>
      <li className="nav-menu-item">
        <a className="nav-menu-link" href="">Angular</a>
      </li>
      <li className="nav-menu-item">
        <a className="nav-menu-link" href="">React</a>
      </li>
      <li className="nav-menu-item">
        <a className="nav-menu-link" href="">O'clock</a>
      </li>
      <li className="nav-menu-item">
        <a className="nav-menu-link" href="">Autre</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
