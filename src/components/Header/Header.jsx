import css from "./Header.module.css";
import React, { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.activeNavLink}` : css.navLink
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.activeNavLink}` : css.navLink
          }
          to="/catalog"
        >
          Catalog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.activeNavLink}` : css.navLink
          }
          to="/favorites"
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;