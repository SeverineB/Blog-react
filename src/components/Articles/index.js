import React from 'react';
import PropTypes from 'prop-types';

/* import Article from './Article'; */

import './style.scss';

import Article from './Article';

const Articles = ({ posts }) => (
  <ul className="articles-list">
    {posts.map((post) => (
      <Article
        key={post.id}
        {...post}
      />
    ))}
  </ul>
);

Articles.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Articles;
