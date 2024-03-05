import { Link } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <div className={css.header}>
      <ul className={css.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
