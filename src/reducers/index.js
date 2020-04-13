import { combineReducers } from "redux";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  SET_USER_AUTH,
} from "../actions/index";

const isAuth = (state = false, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return true;
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
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  isError,
  posts,
  isAuth,
});
