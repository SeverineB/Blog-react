import React from 'react';

/* import Article from './Article'; */

import './style.scss';

const Articles = () => (
  <ul className="articles-list">
    <li>
      <article>
        <h2>Angular, une fausse bonne idée</h2>
        <a href="/angular" className="article-category">Angular</a>
        <p>Lorem</p>
      </article>
    </li>
    <li>
      <article>
        <h2>React, une vraie bonne idée</h2>
        <a href="/react" className="article-category">React</a>
        <p>Lorem</p>
      </article>
    </li>
    <li>
      <article>
        <h2>O'clock, une vraie bonne école ?</h2>
        <a href="/oclock" className="article-category">O'clock</a>
        <p>Lorem</p>
      </article>
    </li>
    <li>
      <article>
        <h2>Pourquoi a-t-on besoin de développeurs ?</h2>
        <a href="/autre" className="article-category">Autre</a>
        <p>Lorem</p>
      </article>
    </li>
  </ul>
);

export default Articles;
