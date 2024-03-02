import { Link } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <div className={css.header}>
      <ul>
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
