import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Article from 'src/components/Article';
import usePageTitle from 'src/hooks/usePageTitle';

const Posts = ({ posts, category }) => {
  usePageTitle(category);
  console.log('category dans articles vaut', category);
  return (
    <div className="posts">
      <h1 className="posts-title">Dev of Thrones - {category}</h1>
      <div className="posts-list">
        { posts.map((post) => (
          <Article
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  category: PropTypes.string.isRequired,
};

export default Posts;
