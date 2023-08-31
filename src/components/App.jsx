import Header from './Header/Header';

import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const easyLazy = path => {
  return lazy(() => import(`pages/${path}`));
};

const Home = easyLazy('Home/Home');
const Movies = easyLazy('Movies/Movies');
const MovieDetails = easyLazy('MovieDetails/MovieDetails');
const Cast = easyLazy('Cast/Cast');
const Reviews = easyLazy('Reviews/Reviews');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
