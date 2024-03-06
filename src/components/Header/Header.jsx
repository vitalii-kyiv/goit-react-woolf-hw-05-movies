import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import { Outlet } from 'react-router-dom';
const Header = () => {
  // const Reviews = lazy(() => import('./Reviews/Reviews'));
  // const Cast = lazy(() => import('./Cast/Cast'));
  return (
    <div>
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
      <Suspense fallback={<h2 className="container">Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Header;
