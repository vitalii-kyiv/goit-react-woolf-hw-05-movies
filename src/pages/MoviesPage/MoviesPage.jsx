import { getSearchMoviesApi } from 'api/movieService';
import SearchForm from 'components/Form/Form';
import Movies from 'components/Movies/Movies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchResults, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      getSearchMovies(query);
    }
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value.trim();
    if (query) {
      setSearchParams({ query });
    }
  };

  const getSearchMovies = async query => {
    try {
      const data = await getSearchMoviesApi(query);
      setSearchResult(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      <Movies searchResults={searchResults} />;
    </div>
  );
};

export default MoviesPage;
