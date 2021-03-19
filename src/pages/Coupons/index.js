import React from "react";
import { Container } from "react-bootstrap";
import FilterForm from "./FilterForm";
import CouponList from "./CouponList";

const Coupons = () => {
  return (
    <Container className="my-4 h-100">
      <FilterForm />
      <CouponList />
    </Container>
  );
};

export default Coupons;
