import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movies'}>Movies</NavLink>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
