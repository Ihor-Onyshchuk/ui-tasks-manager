import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { connect } from "react-redux";

const Nav = (props) => {
  return (
    <div className="Nav">
      <NavLink to="/">
        <Logo />
      </NavLink>
      {props.isAuth ? (
        <NavLink to="/tasks" className="tasksLink">
          tasks
        </NavLink>
      ) : (
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
      )}
    </div>
  );
};

const mapStateToProps = ({ isAuth }) => ({
  isAuth,
});

export default connect(mapStateToProps)(Nav);
