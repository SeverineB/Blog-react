import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

// utilisation d'un composant tout fait fourni par une librairie
// https://www.npmjs.com/package/react-loader-spinner
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// --- composants
import Header from 'src/components/Header';
import Posts from 'src/components/Articles';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Preferences from 'src/components/Preferences';

import './styles.scss';

import categoriesData from 'src/data/categories';

// return filtered posts by category
const getPostsByCategory = (category, posts) => {
  if (category === 'Accueil') {
    return posts;
  }
  const filteredPosts = posts.filter((post) => post.category === category);
  return filteredPosts;
};


const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [dark, setDark] = useState(false);

  const fetchPostsEffect = () => {
    setLoading(true);
    axios.get('https://oclock-open-apis.now.sh/api/blog/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  useEffect(() => {
    fetchPostsEffect();
  }, []);

  return (
    <div className={dark ? 'blog blog--dark' : 'blog'}>
      <Header categories={categoriesData} />
      {loading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {!loading && (
        <Switch>
          <Redirect from="/jquery" to="/react" />
          { categoriesData.map(({ route, label }) => (
            <Route key={label} exact path={route}>
              <Posts category={label} posts={getPostsByCategory(label, posts)} />
            </Route>
          ))}
          <Route exact path="/preferences">
            <Preferences darkValue={dark} changeDarkValue={setDark} />
          </Route>
          <Route><NotFound /></Route>
        </Switch>
      )}
      <Footer />
    </div>
  );
};

export default App;
