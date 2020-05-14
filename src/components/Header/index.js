import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = ({ categories }) => (
  <header className="header">
    <nav className="menu">
      {/* boucle sur les categories pour récupérer construire le menu */}
      {categories.map(({ label, route }) => (
        // Link vient changer le path de l'URL et rajouter une entrée à l'objet history
        <NavLink
          key={label}
          to={route}
          className="menu-link"
          activeClassName="menu-link--active"
          exact
        >
          {label}
        </NavLink>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Header;
