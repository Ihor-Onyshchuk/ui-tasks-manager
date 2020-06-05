import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/images/logo.png"

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow mb-4 pl-3 py-1">
      <NavLink to="/">
          <img className="logo ml-5" src={logo} alt="logo" />
      </NavLink>
      {props.isAuth ? (
        <NavLink to="/tasks" className="tasksLink">
        Tasks
        </NavLink>
      ) : (
        <div className="navbar-nav ml-auto mr-5">
          <NavLink to="/sign-in" className="btn btn-outline-secondary ml-2" role="button">
              Signin
          </NavLink>
          <NavLink to="/sign-up" className="btn btn-outline-secondary ml-2" role="button">
              Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
};

const mapStateToProps = ({ isAuth }) => ({
  isAuth
});

export default connect(mapStateToProps)(Nav);
