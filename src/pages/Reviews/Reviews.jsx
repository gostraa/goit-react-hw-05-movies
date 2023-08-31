import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import style from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewsOfMovie = await fetchMovieReviews(movieId);
        console.log(reviewsOfMovie);
        setReviews(reviewsOfMovie);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul className={style['reviews_list']}>
          {reviews.map(review => (
            <li key={review.id} className={style['review_item']}>
              <h4 className={style['review_author']}>
                Author: {review.author}
              </h4>
              <p className={style['review_content']}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={style['no_reviews_message']}>
          We don't have any reviews for this movie.
        </div>
      )}
    </>
  );
};

export default Reviews;
