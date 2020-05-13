// == Import npm
import React from 'react';

// == Import

import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Articles from 'src/components/Articles';
import Footer from 'src/components/Footer';
import Notfound from 'src/components/Notfound';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Header />
    <Articles />
    <Footer />
  </div>
);

// == Export
export default App;
