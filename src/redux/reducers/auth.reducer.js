import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  AUTH_LOADING,
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
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH_FAILURE:
      return { ...state, loading: false };
    case AUTH_SUCCESS:
      return { ...state, loading: false, isLoggedIn: true, user: payload };
    case LOGOUT:
      return { ...state, user: null, isLoggedIn: false, loading: false };
    default:
      return { ...state };
  }
}

export default reducer;
