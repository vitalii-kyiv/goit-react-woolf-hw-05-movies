import {
  getMovieCreditsApi,
  getMovieDetailsApi,
  getMovieReviewsApi,
} from 'api/movieService';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const MovieContext = React.createContext();

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState({});
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getMovieDetails = async id => {
      try {
        const data = await getMovieDetailsApi(id);
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails(id);
    getMovieCredits(id);
    getMovieReviews(id);
  }, [id]);

  const getMovieCredits = async id => {
    try {
      const data = await getMovieCreditsApi(id);
      console.log(data);
      setMovieCast(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieReviews = async id => {
    try {
      const data = await getMovieReviewsApi(id);
      setMovieReviews(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider value={{ movieCast, movieReviews }}>
      <div>
        <MovieDetails movieDetails={movieDetails} />
        <Outlet />
      </div>
    </MovieContext.Provider>
  );
};

export default MovieDetailsPage;
