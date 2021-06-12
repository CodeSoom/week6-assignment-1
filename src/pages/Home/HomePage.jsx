import React from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <h2>메인 페이지입니다.</h2>
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/restaurants">RESTAURANTS</Link></li>
    </ul>
  </>
);

export default HomePage;
