import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import style from './Home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrend();
  }, []);

  return (
    <>
      <section className={style['home_section']}>
        {loading && <Loader />}
        <div className={style['wrapper']}>
          <h2 className={style['movie_title']}>Trending Movies</h2>
          <MoviesList moviesArr={trendingMovies} />
        </div>
      </section>
    </>
  );
};

export default Home;
