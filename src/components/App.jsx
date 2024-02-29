import {
  getTrendingMoviesApi,
  getSearchMoviesApi,
  getMovieDetailsApi,
  getMovieCreditsApi,
  getMovieReviewsApi,
} from 'api/movieService';

export const App = () => {
  const getTrendingMovies = async () => {
    try {
      const data = await getTrendingMoviesApi();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getTrendingMovies();

  const getSearchMovies = async query => {
    try {
      const data = await getSearchMoviesApi(query);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getSearchMovies('lord');

  const getMovieDetails = async id => {
    try {
      const data = await getMovieDetailsApi(id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getMovieDetails(120);

  const getMovieCredits = async id => {
    try {
      const data = await getMovieCreditsApi(id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getMovieCredits(120);

  const getMovieReviews = async id => {
    try {
      const data = await getMovieReviewsApi(id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getMovieReviews(120);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <p>test </p>
    </div>
  );
};
