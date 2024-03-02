import { getSearchMoviesApi } from 'api/movieService';
import SearchForm from 'components/Form/Form';
import Movies from 'components/Movies/Movies';
import { useState } from 'react';

const MoviesPage = () => {
  const [searchResults, setSearchResult] = useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    getSearchMovies(query);
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
