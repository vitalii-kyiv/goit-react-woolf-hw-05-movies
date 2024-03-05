import {
  getMovieCreditsApi,
  getMovieDetailsApi,
  getMovieReviewsApi,
} from 'api/movieService';
import BackButton from 'components/BackButton/BackButton';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const MovieContext = React.createContext();

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  const getMovieCredits = async id => {
    try {
      const data = await getMovieCreditsApi(id);
      setMovieCast(data.cast);
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

  useEffect(() => {
    if (!id) return;
    const getMovieDetails = async id => {
      try {
        const data = await getMovieDetailsApi(id);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails(id);
    getMovieCredits(id);
    getMovieReviews(id);
  }, [id]);

  return (
    <MovieContext.Provider value={{ movieCast, movieReviews }}>
      <div>
        <BackButton />
        <MovieDetails movieDetails={movieDetails} />
        <Outlet />
      </div>
    </MovieContext.Provider>
  );
};

export default MovieDetailsPage;
