import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrend();
  }, []);

  return (
    <section>
      <div>
        <h2>Trending Movies</h2>
        <MoviesList moviesArr={trendingMovies} />
      </div>
    </section>
  );
};

export default Home;
