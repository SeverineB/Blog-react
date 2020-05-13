import React from 'react';

/* import Article from './Article'; */

import './style.scss';

const Articles = () => (
  <ul className="articles-list">
    <li>
      <article className="article">
        <h2 className="article-title">Angular, une fausse bonne idée</h2>
        <a href="/angular" className="article-category">Angular</a>
        <p className="article-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo amet dicta quos sint. Sunt, nobis? Consequatur quos saepe voluptatibus unde, quae porro voluptatum libero laboriosam incidunt! Repellendus, laudantium libero.</p>
      </article>
    </li>
    <li>
      <article className="article">
        <h2 className="article-title">React, une vraie bonne idée</h2>
        <a href="/react" className="article-category">React</a>
        <p className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptas eos earum et in placeat fugiat autem delectus incidunt corrupti tenetur rem quisquam. Veritatis ipsa laborum doloribus, repudiandae nostrum ipsam?</p>
      </article>
    </li>
    <li>
      <article className="article">
        <h2 className="article-title">O'clock, une vraie bonne école ?</h2>
        <a href="/oclock" className="article-category">O'clock</a>
        <p className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia, deleniti sapiente facilis veniam hic non qui laudantium ullam? Eveniet omnis nisi autem labore totam corrupti voluptatibus debitis fugiat incidunt!</p>
      </article>
    </li>
    <li>
      <article className="article">
        <h2 className="article-title">Pourquoi a-t-on besoin de développeurs ?</h2>
        <a href="/autre" className="article-category">Autre</a>
        <p className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit rerum voluptatibus harum quis aut iure impedit, debitis ducimus illum eaque deleniti aperiam culpa enim amet eius, exercitationem laboriosam autem!</p>
      </article>
    </li>
  </ul>
);

export default Articles;
