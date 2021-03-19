import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { listCoupons } from "../../redux/actions/coupons.actions";
import { Spinner } from "../../components";

const CouponList = ({ coupons, listCoupons }) => {
  useEffect(() => listCoupons(), [listCoupons]);

  return coupons.loading ? (
    <Spinner />
  ) : (
    <>
      <legend className="text-center">
        {coupons.couponList.length} coupons found...
      </legend>
      {coupons.couponList.map((coupon) => (
        <Card key={coupon._id} bg="dark" text="white" className="my-4">
          <Card.Header>
            <small>{coupon.type.toUpperCase()}</small>
          </Card.Header>
          <Card.Body>
            <Card.Title>{coupon.title}</Card.Title>
            <Card.Text>{coupon.description}</Card.Text>
            <Card.Text>
              Expires On - {new Date(coupon.expiryDate).toDateString()}
            </Card.Text>
            <Button variant="success">Buy</Button>
          </Card.Body>
          <Card.Footer>
            Posted By -{" "}
            {coupon.postedBy ? coupon.postedBy.name : "Deleted User"}
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
