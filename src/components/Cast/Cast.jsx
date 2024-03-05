import { MovieContext } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { useContext } from 'react';
import css from './Cast.module.css';
const Cast = () => {
  const { movieCast } = useContext(MovieContext);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className="container">
      <ul className={css.list}>
        {movieCast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              alt=""
              width="200"
            />
            <p>{actor.name}</p>
            <p>
              character:
              {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
