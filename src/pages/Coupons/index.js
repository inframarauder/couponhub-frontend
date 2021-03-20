import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FilterForm from "./FilterForm";
import CouponList from "./CouponList";

const Coupons = () => {
  return (
    <Container className="my-4 h-100">
      <Row>
        <Col sm="4">
          <FilterForm />
        </Col>
        <Col sm="8">
          <legend className="searchBoxText">🤗 available coupons</legend>
          <CouponList />
        </Col>
      </Row>
    </Container>
  );
};

export default Coupons;
