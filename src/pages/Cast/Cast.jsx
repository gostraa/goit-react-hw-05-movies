import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const defaultImg =
  'https://profnastil.by/local/templates/aspro-stroy/images/noimage_detail.png';

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

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <ul>
            {cast.map(actor => {
              return (
                <li key={actor.id}>
                  <img
                    width="200"
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                        : defaultImg
                    }
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
