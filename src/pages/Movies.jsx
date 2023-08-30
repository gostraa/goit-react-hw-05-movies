import { SearchForm } from 'components/SearchForm';
import SearchMovieList from 'components/SearchMovieList';
import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { handleSearch } from 'services/api';

const Movies = () => {
  const [films, setFilms] = useState([]);
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
      }
    };
    getSearchingMovie();
  }, [movieName]);

  const handleFormSubmit = inputValue => {
    setSearchParams({ movieName: inputValue });
  };

  return (
    <section>
      <SearchForm onSubmit={handleFormSubmit} />
      <SearchMovieList arrayOfMovies={films} />
    </section>
  );
};

export default Movies;
