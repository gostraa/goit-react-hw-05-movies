import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import style from './Home.module.css';

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
    <section className={style['home_section']}>
      <div className={style['wrapper']}>
        <h2 className={style['movie_title']}>Trending Movies</h2>
        <MoviesList moviesArr={trendingMovies} />
      </div>
    </section>
  );
};

export default Home;
