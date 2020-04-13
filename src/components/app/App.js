import React from "react";
import "./App.scss";
import Nav from "../nav/Nav";
import routes from "../../Routes";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App pb-5">
      <Nav />
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </div>
  );
};

export default App;
