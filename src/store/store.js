import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reducers from "../reducers/index";
import thunk from "redux-thunk";

const initialState = {
  counter: 0,
  toggleSwitch: false,
  tarif: "free",
  isLoading: false,
  isError: false,
  posts: []
};

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk, logger)
);
