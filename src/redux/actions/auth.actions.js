import {
  SET_LOADING,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  VERIFICATION_FAILURE,
  VERIFICATION_SUCCESS,
  LOGOUT,
} from "../actionTypes";
import api from "../../utils/api";
import errorHandler from "../../utils/errorHandler";

export const signup = (body) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const { data } = await api.signup(body);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch({ type: AUTH_SUCCESS, payload: data });
  } catch (error) {
    errorHandler(error, AUTH_FAILURE, dispatch);
  }
};

export const login = (body) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const { data } = await api.login(body);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch({ type: AUTH_SUCCESS, payload: data });
  } catch (error) {
    errorHandler(error, AUTH_FAILURE, dispatch);
  }
};

export const verifyEmail = (body) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const { data } = await api.verifyEmail(body);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch({ type: VERIFICATION_SUCCESS, payload: data });
  } catch (error) {
    errorHandler(error, VERIFICATION_FAILURE, dispatch);
  }
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = localStorage.getItem("user");
    dispatch({ type: AUTH_SUCCESS, payload: { user: JSON.parse(user) } });
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
