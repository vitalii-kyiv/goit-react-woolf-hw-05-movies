import { MovieContext } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { useContext } from 'react';
const Reviews = () => {
  const { movieReviews } = useContext(MovieContext);
  console.log(movieReviews);
  return (
    <ul>
      {movieReviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
