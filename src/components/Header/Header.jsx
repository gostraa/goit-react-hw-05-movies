import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './Header.module.css';
import styled from 'styled-components';
import { Loader } from 'components/Loader/Loader';

const Header = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: #a1154d;
    }
  `;

  return (
    <>
      <header className={style['header']}>
        <nav className={style['header_navigation']}>
          <StyledLink className={style['link']} to={'/'}>
            Home
          </StyledLink>
          <StyledLink className={style['link']} to={'/movies'}>
            Movies
          </StyledLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
