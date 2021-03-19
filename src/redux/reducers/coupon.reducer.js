import {
  SET_LOADING,
  COUPON_LIST_FAILURE,
  COUPON_LIST_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  coupons: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case COUPON_LIST_FAILURE:
      return { ...state, coupons: [], loading: false };
    case COUPON_LIST_SUCCESS:
      return { ...state, coupons: payload, loading: false };
    default:
      return { ...state };
  }
}

export default reducer;
