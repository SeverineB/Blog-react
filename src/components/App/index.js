// == Import npm
import React from 'react';

// == Import

import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Articles from 'src/components/Articles';
import Footer from 'src/components/Footer';
import Notfound from 'src/components/Notfound';

import './styles.scss';

import categories from 'src/data/categories';
import posts from 'src/data/posts';

// == Composant
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Nav categories={categories} />
        <Header />
        <Articles posts={posts} />
        <Notfound />
        <Footer />
      </div>
    );
}
}

// == Export
export default App;
