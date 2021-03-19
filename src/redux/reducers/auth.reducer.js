import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  USER_FETCH_FAILURE,
  USER_FETCH_SUCCESS,
  SET_LOADING,
  LOGOUT,
} from "../actionTypes";

const initialState = {
  loading: false,
  user: null,
  isLoggedIn: false,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case AUTH_FAILURE:
      return { ...state, loading: false };
    case AUTH_SUCCESS:
      return { ...state, loading: false, isLoggedIn: true };
    case LOGOUT:
      return { ...state, user: null, isLoggedIn: false };
    case USER_FETCH_SUCCESS:
      return { ...state, user: payload, loading: false };
    case USER_FETCH_FAILURE:
      return { ...state, user: null, loading: false };
    default:
      return { ...state };
  }
}

export default reducer;
