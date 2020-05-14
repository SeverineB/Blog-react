import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// --- composants
import Header from 'src/components/Header';
import Articles from 'src/components/Articles';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/Notfound';

import './styles.scss';

import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';

// fonction qui retourne les posts filtrés par catégories
const getPostsByCategory = (category, posts) => {
  // on retourne tous les posts quand on est sur la catégorie accueil
  if (category === 'Accueil') {
    return posts;
  }
  const filteredPosts = posts.filter((post) => post.category === category);
  return filteredPosts;
};


const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPostsEffect = () => {
    setLoading(true);
    setTimeout(() => {
      // on sauvegarde les posts dans le state du composant
      setPosts(postsData);
      setLoading(false);
    }, 2000);
  };

  const loadGetRequest = () => {
    
  };

  // state version class
  // const state = {
  //   count: 0,
  //   posts: 0,
  //   loading: false,
  // }
  // setState({count: 1})

  return (
    <div className="blog">
      <button type="button" onClick={() => { fetchPostsEffect(); loadGetRequest(); }}>Load Data</button>
      <Header categories={categoriesData} />
      {loading && <div>loader</div>}
      {!loading && (
        <Switch>
          <Redirect from="/jquery" to="/react" />
          {/* on va boucler sur les catégories pour avoir une route à chaque
          et ce composant Route affichera les posts filtrés  */}
          { categoriesData.map(({ route, label }) => (
            <Route key={label} exact path={route}>
              <Articles posts={getPostsByCategory(label, posts)} />
            </Route>
          ))}
          <Route><NotFound /></Route>
        </Switch>
      )}
      <Footer />
    </div>
  );
};

export default App;
