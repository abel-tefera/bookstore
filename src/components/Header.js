import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="flex flex-row py-4 justify-between px-4">
        <div className="text-3xl">Bookstore CMS</div>
        <ul className="flex flex-col md:flex-row">
          <li className="px-3">
            <Link to="/">Books</Link>
          </li>
          <li className="px-3">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
