import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const castOfMovie = await fetchMovieCast(movieId);
        setCast(castOfMovie);
        console.log(castOfMovie);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);
  const limitedCast = cast.slice(0, 5);
  return (
    <>
      {cast.length !== 0 && (
        <div>
          <ul>
            {limitedCast.map(actor => {
              return (
                <li key={actor.id}>
                  <img
                    width="150"
                    height="230"
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.original_name}
                  />
                  <p>Character:{actor.character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
    </>
  );
};

export default Cast;
