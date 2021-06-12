import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  const renderPage = ({ path }) => {
    const { container } = render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));

    return container;
  };

  context('with path /', () => {
    it('renders HomePage', () => {
      const container = renderPage({ path: '/' });

      expect(container).toHaveTextContent('메인 페이지입니다.');
    });
  });

  context('with path /about', () => {
    it('renders AboutPage', () => {
      const container = renderPage({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지 입니다.');
    });
  });

  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const container = renderPage({ path: '/restaurants' });

      expect(container).toHaveTextContent('레스토랑 목록입니다.');
    });
  });

  context('with invalid path', () => {
    it('renders NotFoundPage', () => {
      const container = renderPage({ path: '/xxxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
