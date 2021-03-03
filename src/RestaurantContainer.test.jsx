import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import restaurant from '../fixtures/restaurant';

import RestaurantContainer from './RestaurantContainer';

// naive solution for testing useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 3,
  }),
}));

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  given('restaurant', () => restaurant);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders restaurant', () => {
    const { queryByText } = render(<RestaurantContainer />);

    expect(dispatch).toBeCalled();

    expect(queryByText('마법사주방')).not.toBeNull();
    expect(queryByText('주소: 서울 강남구 강남대로94길 9')).not.toBeNull();
    expect(queryByText('맛나는 거')).not.toBeNull();
    expect(queryByText('짠 거')).not.toBeNull();
  });

  context("without restaurant's name", () => {
    it('renders loading', () => {
      given('restaurant', () => ({
        id: null,
        name: '',
      }));

      const { queryByText } = render(<RestaurantContainer />);

      expect(queryByText('loading')).not.toBeNull();
    });
  });

  context('when empty menuItems', () => {
    it('renders message menuItems are empty', () => {
      given('restaurant', () => ({
        id: 10,
        name: '홍콩반점',
        menuItems: null,
      }));

      const { queryByText } = render(<RestaurantContainer />);

      expect(queryByText('메뉴가 없어요')).not.toBeNull();
    });
  });
});
