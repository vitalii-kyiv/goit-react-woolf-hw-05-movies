import { MovieContext } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { useContext } from 'react';
import css from './Reviews.module.css';
const Reviews = () => {
  const { movieReviews } = useContext(MovieContext);
  return movieReviews.length > 0 ? (
    <div className="container">
      <ul className={css.list}>
        {movieReviews.map(review => (
          <li key={review.id}>
            <h4 className='title'>Author: {review.author}</h4>
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
