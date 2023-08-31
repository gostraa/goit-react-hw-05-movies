import { Link, useLocation } from 'react-router-dom';

const SearchMovieList = ({ arrayOfMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {arrayOfMovies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchMovieList;
