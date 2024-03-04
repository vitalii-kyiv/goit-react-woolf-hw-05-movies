import { Link } from 'react-router-dom';

const MovieDetails = ({ movieDetails }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div>
      <img
        src={
          movieDetails.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
            : defaultImg
        }
        alt=""
        width="500"
      />
      <h1>{movieDetails.title}</h1>
      <p>User Score: {movieDetails.vote_average}</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      <p></p>
      <p>Additional infotmation</p>
      <Link to={`/movies/${movieDetails.id}/cast`}>Cast</Link>
      <Link to={`/movies/${movieDetails.id}/reviews`}>Reviews</Link>
    </div>
  );
};

export default MovieDetails;
