import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <MovieList filmsArr={trendingMovies} />
    </section>
  );
};

export default Home;
