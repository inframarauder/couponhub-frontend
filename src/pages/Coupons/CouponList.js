import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { listCoupons } from "../../redux/actions/coupons.actions";
import { Spinner, CouponCard } from "../../components";
import api from "../../utils/api";
import { Button } from "react-bootstrap";

const CouponList = ({ coupons, listCoupons, filters }) => {
  useEffect(() => listCoupons(filters), [listCoupons, filters]);

  const [endIndex, setEndIndex] = useState(3);

  const successToast = (code) => (
    <div className="text-center">
      <p>🦄 Your coupon code is </p>
      <hr />
      <h5>
        <b>{code}</b>
      </h5>
      <hr />
      <p>
        You can see this coupon in the 'My Coupons' section{" "}
        <img
          src="https://media.giphy.com/media/w6YCfXHS6QZjeHlVpI/giphy.gif"
          width="30px"
          alt="coupon-purchased-gif"
        />
      </p>
    </div>
  );
  const handleBuy = async (couponId) => {
    const isConfirmed = window.confirm(
      "🤠 Are you sure you want to buy this coupon?"
    );
    if (isConfirmed) {
      try {
        const { data } = await api.buyCoupon({ couponId });
        toast.success(successToast(data.coupon.code), {
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
        {coupons.couponList.map((coupon, index) =>
          index <= endIndex ? (
            <div key={coupon._id} className="col-lg-4">
              <CouponCard
                coupon={coupon}
                showBuy={true}
                handleBuy={handleBuy}
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>

      {endIndex < coupons.couponList.length - 1 && (
        <div className="center-content">
          <Button
            className="search-results"
            
            onClick={() => setEndIndex(endIndex + 6)}
            size="md"
            style={{
              border : "none!important",
              margin: "40px 0px!important"
            }}
          >
            Show more ...
          </Button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  coupons: state.coupons,
});

const mapDispatchToProps = (dispatch) => ({
  listCoupons: (filters) => dispatch(listCoupons(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CouponList);
