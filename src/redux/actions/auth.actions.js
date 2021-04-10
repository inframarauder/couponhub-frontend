import {
  SET_LOADING,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  USER_FETCH_FAILURE,
  USER_FETCH_SUCCESS,
  LOGOUT,
} from "../actionTypes";
import api from "../../utils/api";
import errorHandler from "../../utils/errorHandler";
import jwt from "jsonwebtoken";

export const plainAuth = (type, body) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const { data } =
      type === "signup" ? await api.signup(body) : await api.login(body);
    const { accessToken, refreshToken } = data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    const { user } = jwt.verify(
      accessToken,
      process.env.REACT_APP_ACCESS_TOKEN_SECRET
    );
    dispatch({ type: AUTH_SUCCESS, payload: user });
  } catch (error) {
    errorHandler(error, AUTH_FAILURE, dispatch);
  }
};

export const fetchUserProfile = (userId) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const { data } = await api.getUserProfile(userId);
    dispatch({ type: USER_FETCH_SUCCESS, payload: data });
  } catch (error) {
    errorHandler(error, USER_FETCH_FAILURE, dispatch);
  }
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch({ type: AUTH_SUCCESS });
    dispatch(fetchUserProfile("me"));
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
