import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import ReduxTesTask from '../ReduxTestTask/ReduxTestTask';

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

        <NavLink to='/redux-test-task' activeClassName='selected'>
          {/* <ReduxTesTask /> */}
          redux test task
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
