import { getTrendingMoviesApi } from 'api/movieService';
import Home from 'components/Home/Home';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const data = await getTrendingMoviesApi();
      setTrendingMovies(prevTrendingMovies => [...data]);
    } catch (error) {
      console.log(error);
    }
  };
  return <Home trendingMovies={trendingMovies} />;
};

export default HomePage;
