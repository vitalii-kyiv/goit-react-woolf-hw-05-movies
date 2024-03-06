import { getMovieDetailsApi } from 'api/movieService';
import BackButton from 'components/BackButton/BackButton';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

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
  }, [id]);

  return (
    <div>
      <BackButton />
      <MovieDetails movieDetails={movieDetails} />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
