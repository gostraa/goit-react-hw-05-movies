import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './Header.module.css';
const Header = () => {
  return (
    <>
      <header className={style['header']}>
        <NavLink className={style['link']} to={'/'}>
          Home
        </NavLink>
        <NavLink className={style['link']} to={'/movies'}>
          Movies
        </NavLink>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
