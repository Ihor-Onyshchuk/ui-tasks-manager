import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

const Nav = () => {
  return (
    <div className="Nav">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/sign-in" activeClassName="selected">
            sign-in
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" activeClassName="selected">
            sign-up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
