import { Link } from 'react-router-dom';

export const MovieList = ({ filmsArr }) => {
  return (
    <ul>
      {filmsArr.map(film => {
        return (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
