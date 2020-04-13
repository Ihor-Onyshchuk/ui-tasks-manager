import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-light shadow mb-4 pl-3 py-2">
      <NavLink to="/" className="navbar-brand">
        <img src="placeholder.svg" width="35" height="35" alt="" />
      </NavLink>

      <div class="navbar-nav ml-auto">
        <NavLink to="/sign-in" className="nav-item nav-link text-primary">
          Sign-In
        </NavLink>
        <NavLink to="/sign-up" className="nav-item nav-link text-success">
          Sign-Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
