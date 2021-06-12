import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import RestaurantsPage from '../pages/Restaurants/RestaurantsPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

export default function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>레스토랑 찾기</h1>
        </Link>
      </header>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/restaurants">
          <RestaurantsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
