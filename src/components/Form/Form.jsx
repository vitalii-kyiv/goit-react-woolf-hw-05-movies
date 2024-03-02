const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <input type="text" name="query" autoComplete="off" autoFocus />
      <button type="submit"></button>
    </form>
  );
};

export default SearchForm;
