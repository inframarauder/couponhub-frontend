import {
  COUPONS_LOADING,
  COUPON_LIST_FAILURE,
  COUPON_LIST_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  couponList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case COUPONS_LOADING:
      return { ...state, loading: true };
    case COUPON_LIST_FAILURE:
      return { ...state, coupons: [], loading: false };
    case COUPON_LIST_SUCCESS:
      return { ...state, couponList: payload, loading: false };
    default:
      return { ...state };
  }
}

export default reducer;
