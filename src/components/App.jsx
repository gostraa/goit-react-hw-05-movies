// import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Movies from 'pages/Movies';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
import Header from './Header';

import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const easyLazy = path => {
  return lazy(() => import(`pages/${path}`));
};

const Home = easyLazy('Home');
const Movies = easyLazy('Movies');
const MovieDetails = easyLazy('MovieDetails');
const Cast = easyLazy('Cast');
const Reviews = easyLazy('Reviews');

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
