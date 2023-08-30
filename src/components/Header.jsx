import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movies'}>Movies</NavLink>
      </header>
      <Outlet />
    </>
  );
};
