import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Article = ({ category, title, excerpt }) => (
  <div className="post">
    <h2 className="post-title">{title}</h2>
    {/* ajout d'un lien sur les catégories qui nous permet de retourner sur la bonne URL */}
    <Link to={category.toLowerCase()}><div className="post-category">{category}</div></Link>
    <p className="post-excerpt">{excerpt}</p>
  </div>
);

Article.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Article;
