import { Link } from 'react-router-dom';

const Home = ({ trendingMovies }) => {
  console.log(trendingMovies);
  return (
    <ul>
      {trendingMovies.map(trendingMovie => (
        <li key={trendingMovie.id}>
          <Link to={`/movies/${trendingMovie.id}`}>{trendingMovie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Home;
