import { Link } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = ({ movieDetails }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div>
          <h1 className="title">{movieDetails.title}</h1>
          <p className={css.text}>User Score: {movieDetails.vote_average}</p>
          <h2 className="title">Overview</h2>
          <p className={css.text}>{movieDetails.overview}</p>
          <h3 className="title">Genres</h3>
          <ul className={css.list}>
            {movieDetails.genres &&
              movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
          <h3 className="title">Additional infotmation:</h3>
          <ul className={css.list}>
            <li className={css.item}>
              <Link to={`/movies/${movieDetails.id}/cast`}>Cast</Link>
            </li>
            <li className={css.item}>
              <Link to={`/movies/${movieDetails.id}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>

        <div>
          <img
            className={css.img}
            src={
              movieDetails.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
                : defaultImg
            }
            alt=""
            width="400"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
