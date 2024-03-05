import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MovieList = ({ moviesData }) => {
  const location = useLocation();
  return (
    <div className="container">
            <ul className={css.list}>
        {moviesData.map(movieData => (
          <li key={movieData.id}>
            <Link
              className={css.item}
              to={`/movies/${movieData.id}`}
              state={location}
            >
              {movieData.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
