import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import style from './Cast.module.css';

const defaultImg =
  'https://profnastil.by/local/templates/aspro-stroy/images/noimage_detail.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
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
    <div className={style['cast_section']}>
      {cast.length !== 0 ? (
        <ul className={style['cast_list']}>
          {cast.map(actor => (
            <li key={actor.id} className={style['cast_item']}>
              <img
                width={200}
                height={300}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.original_name}
                className={style['actor_image']}
              />
              <p className={style['actor_character']}>
                Character: {actor.character}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={style['no_cast_message']}>
          We don't have any cast for this movie.
        </div>
      )}
    </div>
  );
};

export default Cast;
