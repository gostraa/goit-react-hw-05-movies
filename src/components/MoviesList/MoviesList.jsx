import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MovieList.module.css';

export const MoviesList = ({ moviesArr }) => {
  const location = useLocation();
  return (
    <div className={style['list_wrapper']}>
      <ul className={style['list']}>
        {moviesArr.map(movie => (
          <Link
            className={style['link_item']}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <li key={movie.id} className={style['list_item']}>
              {movie.original_title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  moviesArr: PropTypes.array.isRequired,
};
