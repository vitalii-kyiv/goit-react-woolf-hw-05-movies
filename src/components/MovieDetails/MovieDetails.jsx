import { Link } from 'react-router-dom';

const MovieDetails = ({ movieDetails }) => {
  return (
    <div>
      <img
        src="https://api.themoviedb.org/3/ldfCF9RhR40mppkzmftxapaHeTo.jpg"
        alt=""
      />
      <h1>{movieDetails.title}</h1>
      <p>User Score: {movieDetails.vote_average}</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      <p></p>
      <p>Additional infotmation</p>
      <Link to={`/movies/${movieDetails.id}/cast`}
      >
        Cast
      </Link>
      {/* <Link to={}>Reviews</Link> */}
    </div>
  );
};

export default MovieDetails;
