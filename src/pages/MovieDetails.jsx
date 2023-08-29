import { Cast } from 'components/Cast/Cast';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const film = await fetchMovieDetails(movieId);
        setDetails(film);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [movieId]);
  console.log(details);
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
        width="250"
        height="350"
        alt=""
      />
      {details.original_title && <h2>{details.original_title}</h2>}
      {details.vote_average && (
        <p>User score: {Math.round(details.vote_average * 10)}%</p>
      )}
      <h2>Overview</h2>
      {details.overview && (
        <>
          <h2>Overview</h2>
          <p>{details.overview}</p>
        </>
      )}
      {details.genres && details.genres.length > 0 && (
        <div>
          <h2>Genres</h2>
          <ul>
            {details.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}

      {details.id && (
        <Link to={`/cast/${details.id}`}>
          <Cast details={details} />
        </Link>
      )}
    </>
  );
};

export default MovieDetails;
