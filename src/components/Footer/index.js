import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Footer = () => (
  <div className="footer">DevOfThrones le blog du développeur React - 2020 &#169; - <Link to="/preferences">Préférences</Link></div>
);

export default Footer;
