import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { listCoupons } from "../../redux/actions/coupons.actions";
import { Spinner, CouponCard } from "../../components";
import api from "../../utils/api";

const CouponList = ({ coupons, listCoupons }) => {
  useEffect(() => listCoupons(), [listCoupons]);

  const successToast = (code) => (
    <div className="text-center">
      <p>🦄😇 Your coupon code is </p>
      <p>
        <h5>{code}</h5>
      </p>
      <p>You can view this coupon in the 'My Coupons' section.</p>
    </div>
  );
  const handleBuy = async (couponId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to buy this coupon?"
    );
    if (isConfirmed) {
      try {
        const { data } = await api.buyCoupon({ couponId });
        toast.success(successToast(data.code), {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
          draggable: false,
          closeOnClick: false,
        });
        listCoupons();
      } catch (error) {
        console.error(error);
        if (error.response) {
          toast.error(error.response.data.error);
        }
      }
    }
  };

  return coupons.loading ? (
    <Spinner />
  ) : (
    <>
      <legend className="text-center search-results">
        🦄😇 {coupons.couponList.length} coupon(s) found...
      </legend>
      <div className="row">
        {coupons.couponList.map((coupon) => (
          <div key={coupon._id} className="col-lg-6">
            <CouponCard coupon={coupon} showBuy={true} handleBuy={handleBuy} />
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  coupons: state.coupons,
});

const mapDispatchToProps = (dispatch) => ({
  listCoupons: () => dispatch(listCoupons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CouponList);
