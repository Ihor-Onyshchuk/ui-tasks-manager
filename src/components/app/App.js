import React, { PureComponent } from "react";
import "./App.scss";
import Nav from "../nav/Nav";
import routes from "../../Routes";
import { Switch, Route } from "react-router-dom";
import { setToken } from "../../api/apiConfig";
import { setUserAuth } from "../../actions";
import { connect } from "react-redux";

const token = localStorage.getItem("user-token");
if (token) setToken(token);

class App extends PureComponent {
  constructor(props) {
    super(props);
    if (token) this.props.setUserAuth();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} path={path} exact={exact} component={component} />
          ))}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ isAuth }) => ({
  isAuth,
});

const mapDispatchToProps = {
  setUserAuth: setUserAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
