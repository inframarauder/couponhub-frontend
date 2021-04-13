import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import FilterForm from "./FilterForm";
import CouponList from "./CouponList";

const Coupons = () => {
  const [key, setKey] = useState("All");

  return (
    <Container className="my-4 h-100">
      <FilterForm />
      <legend className="searchBoxText">🤗 available coupons</legend>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="All" title="All">
          <CouponList type={key} />
        </Tab>
        <Tab eventKey="percentage" title="Percentage">
          <CouponList type={key} />
        </Tab>
        <Tab eventKey="flat" title="Flat">
          <CouponList type={key} />
        </Tab>
        <Tab eventKey="free" title="Free">
          <CouponList type={key} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Coupons;
