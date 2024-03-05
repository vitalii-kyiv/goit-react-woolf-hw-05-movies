import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';

const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   maxWidth: '2400px',
    //   margin: '0 auto',
    //   padding: '40px',
    //   fontSize: '20',
    //   color: '#010101',
    // }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/movies"
          element={
            <Suspense fallback={<h2>Loading</h2>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <Suspense fallback={<h2>Loading</h2>}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
