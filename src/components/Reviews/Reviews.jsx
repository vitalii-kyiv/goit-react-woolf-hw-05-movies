import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { useEffect, useState } from 'react';
import { getMovieReviewsApi } from 'api/movieService';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const getMovieReviews = async id => {
      try {
        const data = await getMovieReviewsApi(id);
        setMovieReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews(id);
  }, [id]);

  return movieReviews.length > 0 ? (
    <div className="container">
      <ul className={css.list}>
        {movieReviews.map(review => (
          <li key={review.id}>
            <h4 className="title">Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p className="container">We don't have any reviews for this movie.</p>
  );
};

export default Reviews;
