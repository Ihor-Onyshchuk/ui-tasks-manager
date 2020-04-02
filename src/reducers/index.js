import { combineReducers } from "redux";
import {
  INCREMENT,
  DECREMENT,
  TOGGLE_SWITCH_BUTTON,
  CHANGE_TARIFF_VALUE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  INCREMENT_BY_TWO
} from "../actions/index";

const counterByTwo = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_BY_TWO:
      return state + 2;
    default:
      return state;
  }
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const toggleSwitch = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH_BUTTON:
      return !state;
    default:
      return state;
  }
};

const tarif = (state = "free", action) => {
  switch (action.type) {
    case CHANGE_TARIFF_VALUE:
      return action.tarif;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return true;
    case FETCH_POSTS_FAILURE:
    case FETCH_POSTS_SUCCESS:
      return false;
    default:
      return state;
  }
};

const isError = (state = false, action) => {
  switch (action.type) {
    case FETCH_POSTS_FAILURE:
      return true;
    case FETCH_POSTS_SUCCESS:
    case FETCH_POSTS_REQUEST:
      return false;
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.results;
    case FETCH_POSTS_FAILURE:
    case FETCH_POSTS_REQUEST:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  counterByTwo,
  counter,
  toggleSwitch,
  tarif,
  isLoading,
  isError,
  posts
});
