import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MovieList.module.css';

export const MoviesList = ({ moviesArr }) => {
  const location = useLocation();

  return (
    <>
      {moviesArr.length !== 0 ? (
        <div className={style['list_wrapper']}>
          <ul className={style['list']}>
            {moviesArr.map(movie => (
              <Link
                key={movie.id}
                className={style['link_item']}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                <li className={style['list_item']}>{movie.original_title}</li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <p className={style['no_films_message']}>
          No films found for this query
        </p>
      )}
    </>
  );
};

MoviesList.propTypes = {
  moviesArr: PropTypes.array.isRequired,
};
