import { combineReducers } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const toggleSwitch = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SWITCH_BUTTON":
      return !state;
    default:
      return state;
  }
};

const tarif = (state = "free", action) => {
  switch (action.type) {
    case "CHANGE_TARIFF_VALUE":
      return action.tarif;
    default:
      return state;
  }
};

export default combineReducers({ counter, toggleSwitch, tarif });
