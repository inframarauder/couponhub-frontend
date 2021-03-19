import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Card, Button } from "react-bootstrap";
import { listCoupons } from "../../redux/actions/coupons.actions";
import { Spinner } from "../../components";
import api from "../../utils/api";

const CouponList = ({ coupons, listCoupons }) => {
  useEffect(() => listCoupons(), [listCoupons]);

  const successToast = (code) => (
    <div className="text-center">
      <p>Success! Your coupon code is - </p>
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
      <legend className="text-center">
        {coupons.couponList.length} coupons found...
      </legend>
      {coupons.couponList.map((coupon) => (
        <Card className="my-4" key={coupon._id} bg="dark" text="white">
          <Card.Header>
            <small>{coupon.type.toUpperCase()}</small>
          </Card.Header>
          <Card.Body>
            <Card.Title>{coupon.title}</Card.Title>
            <Card.Text>{coupon.description}</Card.Text>
            <Card.Text>
              Expires On - {new Date(coupon.expiryDate).toDateString()}
            </Card.Text>
            <Card.Text>
              Posted By -{" "}
              {coupon.postedBy ? coupon.postedBy.name : "Deleted User"}
            </Card.Text>
          </Card.Body>{" "}
          <Card.Footer>
            <Button variant="success" onClick={() => handleBuy(coupon._id)}>
              Buy
            </Button>
          </Card.Footer>
        </Card>
      ))}
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
