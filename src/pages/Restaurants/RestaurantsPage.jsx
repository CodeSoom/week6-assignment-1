import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesContainer from '../../components/CategoriesContainer';
import RegionsContainer from '../../components/RegionsContainer';
import RestaurantsContainer from '../../components/RestaurantsContainer';

import { loadInitialData } from '../../redux/actions';

const RestaurantsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <>
      <h2>레스토랑 목록입니다.</h2>
      <div>
        <RegionsContainer />
        <CategoriesContainer />
        <RestaurantsContainer />
      </div>
    </>
  );
};

export default RestaurantsPage;
