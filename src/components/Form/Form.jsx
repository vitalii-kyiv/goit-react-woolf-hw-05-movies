import css from './Form.module.css';

const SearchForm = ({ handleSubmit }) => {
  return (
    <div className="container">
      <form className={css.form} onSubmit={handleSubmit}>
        <label name="query"></label>
        <input type="text" name="query" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
