import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Article from 'src/components/Article';

const Articles = ({ posts }) => (
  <div className="articles">
    <h1 className="articles-title">Dev of Thrones</h1>
    <div className="articles-list">
      { posts.map((post) => (
        <Article
          key={post.id}
          {...post}
        />
      ))}
    </div>
  </div>
);

Articles.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Articles;
