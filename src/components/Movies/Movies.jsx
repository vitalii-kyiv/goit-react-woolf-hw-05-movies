import { Link } from 'react-router-dom';

const Movies = ({ searchResults }) => {
  return (
    <ul>
      {searchResults.map(searchResult => (
        <li key={searchResult.id}>
          <Link to={`/movies/${searchResult.id}`}>{searchResult.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
