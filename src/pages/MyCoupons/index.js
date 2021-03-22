import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import api from "../../utils/api";
import { Spinner, CouponCard } from "../../components/";

const MyCoupons = ({ auth }) => {
  const [state, setState] = useState({
    coupons: [],
    loading: false,
  });

  const loadMyCoupons = useCallback(async () => {
    setState((state) => ({ ...state, loading: true }));
    try {
      const { data } = await api.listCoupons({
        status: "sold",
        soldTo: auth.user?._id,
      });
      setState((state) => ({ ...state, coupons: data, loading: false }));
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.error);
      }
      setState((state) => ({ ...state, loading: false }));
    }
  }, [auth.user?._id]);

  useEffect(() => loadMyCoupons(), [loadMyCoupons]);

  return state.loading ? (
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
        {state.coupons.map((coupon) => (
          <Col key={coupon._id} sm="6">
            <CouponCard coupon={coupon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, null)(MyCoupons);
