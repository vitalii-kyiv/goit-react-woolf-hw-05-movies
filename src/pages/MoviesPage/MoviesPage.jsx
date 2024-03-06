import { getSearchMoviesApi } from 'api/movieService';
import SearchForm from 'components/Form/Form';
import MovieList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchResults, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      const getSearchMovies = async () => {
        try {
          const data = await getSearchMoviesApi(query);
          if (data.length > 0) {
            setSearchResult(data);
          }
          setIsSearched(true);
        } catch (error) {
          console.log(error);
        }
      };
      getSearchMovies();
    }
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value.trim();
    if (query) {
      setSearchParams({ query });
      setIsSearched(false);
    }
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {isSearched && searchResults.length === 0 ? (
        <p className="container">
          Movies according to your search query are not available.
        </p>
      ) : (
        <MovieList moviesData={searchResults} />
      )}
    </div>
  );
};
export default MoviesPage;
