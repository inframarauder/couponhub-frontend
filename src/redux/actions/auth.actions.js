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

export const signup = (body) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const { data } = await api.signup(body);
    localStorage.setItem("token", data.token);
    dispatch({ type: AUTH_SUCCESS });
  } catch (error) {
    errorHandler(error, AUTH_FAILURE, dispatch);
  }
};

export const login = (body) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const { data } = await api.login(body);
    localStorage.setItem("token", data.token);
    dispatch({ type: AUTH_SUCCESS });
    dispatch(fetchUserProfile("me"));
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
