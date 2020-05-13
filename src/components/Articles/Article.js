import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import posts from '../../data/posts';


const Article = ({ category, title, excerpt }) => (
  <li>
    <article className="article">
      <h2 className="article-title">{title}</h2>
      <a href="/angular" className="article-category">{category}</a>
      <p className="article-content">{excerpt}</p>
    </article>
  </li>
);

Article.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default Article;
