export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const TOGGLE_SWITCH_BUTTON = "TOGGLE_SWITCH_BUTTON";
export const CHANGE_TARIFF_VALUE = "CHANGE_TARIFF_VALUE";
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const toggleSwitch = () => {
  return {
    type: TOGGLE_SWITCH_BUTTON
  };
};

export const changeTariffValue = tarif => {
  return {
    type: CHANGE_TARIFF_VALUE,
    tarif
  };
};

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  };
};

export const fetchPostsFailure = () => {
  return {
    type: FETCH_POSTS_FAILURE
  };
};

export const fetchPostsSuccess = results => {
  return {
    type: FETCH_POSTS_SUCCESS,
    results
  };
};

export const fetchPosts = () => dispatch => {
  console.log("Fetching posts");
};

// __________________________
export const 