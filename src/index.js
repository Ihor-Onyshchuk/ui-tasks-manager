import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App className="App" />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
