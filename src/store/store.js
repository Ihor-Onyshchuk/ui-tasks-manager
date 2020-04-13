import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reducers from "../reducers/index";
import thunk from "redux-thunk";

const initialState = {
  isAuth: false,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger))
);
