import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Nav = ({ categories }) => (
  <nav className="nav-menu">
    <ul>
      {categories.map((category) => (
        <li key={category.label} className="nav-menu-item">
          <a className="nav-menu-link" href={category.route}>{category.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Nav;
