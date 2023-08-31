import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesArr }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {moviesArr.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
