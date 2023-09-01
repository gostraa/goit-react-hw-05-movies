import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from 'services/api';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('movieName');

  useEffect(() => {
    if (!movieName) return;

    const getSearchingMovie = async () => {
      try {
        const searchingMovie = await handleSearch(movieName);
        setFilms(searchingMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSearchingMovie();
  }, [movieName]);

  const handleFormSubmit = inputValue => {
    setSearchParams({ movieName: inputValue });
    setLoading(true);
  };
  console.log(films);

  return (
    <>
      {loading && <Loader />}
      <section>
        <SearchForm onSubmit={handleFormSubmit} />

        <MoviesList moviesArr={films} />
      </section>
    </>
  );
};

export default Movies;
