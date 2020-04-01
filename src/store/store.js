import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reducers from "../reducers/index";

const initialState = {
  counter: 0,
  toggleSwitch: false,
  tarif: "free"
};

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(logger)
);
