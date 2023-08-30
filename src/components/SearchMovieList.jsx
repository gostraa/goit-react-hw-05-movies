import { Link } from 'react-router-dom';

const SearchMovieList = ({ arrayOfMovies }) => {
  return (
    <ul>
      {arrayOfMovies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchMovieList;
