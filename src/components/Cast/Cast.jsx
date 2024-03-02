import { MovieContext } from "pages/MovieDetailsPage/MovieDetailsPage";
import { useContext } from "react";
const Cast = () => {
  const { movieCast } = useContext(MovieContext);
  return (
    <ul>
      {movieCast.cast.map(actor => (
        <li key={actor.cast_id}>
          <img src="profile_path" alt="" />
          <p>{actor.name}</p>
          <p>
            character:
            {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
