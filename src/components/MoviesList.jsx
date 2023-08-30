import { Link } from 'react-router-dom';

export const MoviesList = ({ moviesArr }) => {
  return (
    <div>
      <ul>
        {moviesArr.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
