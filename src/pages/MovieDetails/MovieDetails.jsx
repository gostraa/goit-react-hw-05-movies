import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import style from './MovieDetails.module.css';

const defaultImg = 'https://cleanshop.ru/i/no_image.gif';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const detailsOfMovie = await fetchMovieDetails(movieId);
        setMovieDetails(detailsOfMovie);
        console.log(detailsOfMovie);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    movieDetails && (
      <section
        style={{
          backgroundImage: movieDetails.poster_path
            ? `url(https://image.tmdb.org/t/p/original${movieDetails.poster_path})`
            : `url(${defaultImg})`,
        }}
        className={style['movie_details_section']}
      >
        <div className={style['overlay']}></div>
        <div className={style['position']}>
          {' '}
          <Link
            className={style['movie_details_link_back']}
            to={backLink.current}
          >
            ↩️ Go Back
          </Link>
          <div className={style['movie_details_img_wrapper']}>
            <img
              className={style['movie_details_img']}
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
                  : defaultImg
              }
              alt={movieDetails.title}
            />
          </div>
          <div className={style['movie_details_info_wrapper']}>
            <h1 className={style['movie_details_title']}>
              {movieDetails.title}({parseInt(movieDetails.release_date)})
            </h1>
            <p className={style['movie_details_score']}>
              User Score:{parseInt(movieDetails.vote_average * 10)}%
            </p>
            {movieDetails.overview !== '' && (
              <h2 className={style['movie_details_overview_title']}>
                Overview
              </h2>
            )}
            <p className={style['movie_details_overview']}>
              {movieDetails.overview}
            </p>
            {movieDetails.genres.length !== 0 && (
              <h2 className={style['movie_details_genre_title']}>Genres</h2>
            )}
            <ul className={style['movie_details_list']}>
              {movieDetails.genres.map(genre => {
                return (
                  <li
                    className={style['movie_details_list_item']}
                    key={genre.id}
                  >
                    {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={style['movie_details_links_list']}>
            <li>
              <Link
                className={style['movie_details_links_list_item']}
                to={'cast'}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                className={style['movie_details_links_list_item']}
                to={'review'}
              >
                Review
              </Link>
            </li>
          </ul>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    )
  );
};

export default MovieDetails;
