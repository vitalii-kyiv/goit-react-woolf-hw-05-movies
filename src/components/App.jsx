import { useEffect, useState } from 'react';
import {
  getSearchMoviesApi,
  getMovieDetailsApi,
  getMovieCreditsApi,
  getMovieReviewsApi,
} from 'api/movieService';

import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResult] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  // const [movieId, setMovieId] = useState();
  const [movieCast, setMovieCast] = useState({});

  // const getMovieCredits = async id => {
  //   try {
  //     const data = await getMovieCreditsApi(id);
  //     console.log(data);
  //     setMovieCast(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleMovieCredits = id => {
  //   getMovieCredits(id);
  // };

  // const getMovieReviews = async id => {
  //   try {
  //     const data = await getMovieReviewsApi(id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getMovieReviews(120);

  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>
      {/* <Home
        trendingMovies={trendingMovies}
        handleMovieDetails={handleMovieDetails}
      />
      <Movies getSearchMovies={getSearchMovies} searchResults={searchResults} />
      <MovieDetails
        // handleMovieDetails={handleMovieCredits}
        movieDetails={movieDetails}
      />
      <Cast movieCast={movieCast} /> */}
    </div>
  );
};
