import { getTrendingMoviesApi } from 'api/movieService';
import MovieList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const data = await getTrendingMoviesApi();
      setTrendingMovies([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="title, container">Trending today</h1>
      <MovieList moviesData={trendingMovies} />
    </div>
  );
};


export default HomePage;
