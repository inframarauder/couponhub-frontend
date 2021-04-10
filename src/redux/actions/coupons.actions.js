import {
  SET_LOADING,
  COUPON_LIST_FAILURE,
  COUPON_LIST_SUCCESS,
} from "../actionTypes";

import api from "../../utils/api";
import errorHandler from "../../utils/errorHandler";

export const listCoupons = (filters = {}) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const { data } = await api.listCoupons(filters);
    dispatch({ type: COUPON_LIST_SUCCESS, payload: data.coupons });
  } catch (error) {
    errorHandler(error, COUPON_LIST_FAILURE, dispatch);
  }
};
