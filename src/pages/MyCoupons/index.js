import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Spinner, CouponCard } from "../../components/";
import { listCoupons } from "../../redux/actions/coupons.actions";

const MyCoupons = ({ coupons, listCoupons }) => {
  useEffect(() => listCoupons({ status: "sold" }), [listCoupons]);

  return coupons.loading ? (
    <Spinner />
  ) : (
    <Container className="h-100">
      <legend
        className="text-center my-4"
        style={{
          color: "rgb(255, 208, 121)",
        }}
      >
        🥑 <b>Your coupons</b>
        <hr />
      </legend>
      <Row>
        {coupons.couponList.length > 0 ? (
          coupons.couponList.map((coupon) => (
            <Col key={coupon._id} sm="6">
              <CouponCard coupon={coupon} showReport={true} />
            </Col>
          ))
        ) : (
          <div className="text-center" style={{ margin: "auto" }}>
            <p>You currently have no coupons</p>
            <a href="/coupons">
              <Button className="submit_button">Back to Explore 😃</Button>
            </a>
          </div>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  coupons: state.coupons,
});
const mapDispatchToProps = (dispatch) => ({
  listCoupons: (filters) => dispatch(listCoupons(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCoupons);
