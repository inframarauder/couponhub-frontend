import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  VERIFICATION_FAILURE,
  VERIFICATION_SUCCESS,
  SET_LOADING,
  LOGOUT,
} from "../actionTypes";

const initialState = {
  loading: false,
  user: null,
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case AUTH_FAILURE:
      return { ...state, loading: false };
    case AUTH_SUCCESS:
      return { ...state, loading: false, user: payload.user, isLoggedIn: true };
    case LOGOUT:
      return { ...state, user: null, isLoggedIn: false };
    case VERIFICATION_SUCCESS:
      return { ...state, user: payload.user };
    case VERIFICATION_FAILURE:
    default:
      return { ...state };
  }
}
