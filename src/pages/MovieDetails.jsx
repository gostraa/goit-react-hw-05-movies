import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

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
        // console.log(detailsOfMovie);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    movieDetails && (
      <section>
        <Link to={backLink.current}>↩️ Go Back</Link>

        <div>
          <img
            width="230"
            height="300"
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
                : defaultImg
            }
            alt={movieDetails.title}
          />
        </div>

        <div>
          <h1>
            {movieDetails.title}({parseInt(movieDetails.release_date)})
          </h1>
          <p>User Score:{parseInt(movieDetails.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movieDetails.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </div>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'review'}>Review</Link>
          </li>
        </ul>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </section>
    )
  );
};

export default MovieDetails;
