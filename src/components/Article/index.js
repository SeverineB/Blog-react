import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DOMPurify from 'dompurify';

import './style.scss';

const createMarkup = (dirtyHTML) => {

  const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
    ALLOWED_TAGS: ['em', 'strong'],
  });
  return {
    __html: cleanHTML,
  };
};

const Post = ({ category, title, excerpt }) => {
  const newCat = category.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      {/* ajout d'un lien sur les catégories qui nous permet de retourner sur la bonne URL */}
      <Link to={newCat.toLowerCase()}><div className="post-category">{category}</div></Link>
      <p
        className="post-excerpt"
        dangerouslySetInnerHTML = {createMarkup(excerpt)}
      />
    </div>
  );
};

Post.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
