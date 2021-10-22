import {
  AUTH_LOADING,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  LOGOUT,
} from "../actionTypes";
import api from "../../utils/api";
import errorHandler from "../../utils/errorHandler";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";

export const authenticate = (type, body) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    let res;
    switch (type) {
      case "google":
        res = await api.googleAuth(body);
        break;
      case "signup":
        res = await api.signup(body);
        break;
      case "login":
        res = await api.login(body);
        break;
      default:
        res = null;
    }
    const { accessToken, refreshToken } = res.data;
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

export const verifyEmail = (body) => async (dispatch) => {
  console.log("here");
  dispatch({ type: AUTH_LOADING });
  try {
    const { data } = await api.verifyEmail(body);
    localStorage.setItem("accessToken", data.accessToken); //reset jwt with updated token
    const { user } = jwt.verify(
      data.accessToken,
      process.env.REACT_APP_ACCESS_TOKEN_SECRET
    );
    toast.success(data.message);
    dispatch({ type: AUTH_SUCCESS, payload: user });
  } catch (error) {
    errorHandler(error, AUTH_FAILURE, dispatch);
  }
};

export const checkAuth = () => async (dispatch) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      dispatch({ type: AUTH_LOADING });
      const { data } = await api.getUserProfile();
      dispatch({ type: AUTH_SUCCESS, payload: data.user });
    } catch (error) {
      errorHandler(error, AUTH_FAILURE, dispatch);
    }
  }
};

export const logout = () => async (dispatch) => {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    await api.logout(refreshToken);
  } catch (error) {
    console.error(error);
  }
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
