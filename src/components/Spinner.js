import React from "react";
import { Spinner as BootstrapSpinner, Container } from "react-bootstrap";

const Spinner = () => {
  return (
    <Container className="center-content" style={{ height: "80vh" }}>
      <BootstrapSpinner variant="primary" animation="border" />
    </Container>
  );
};

export default Spinner;
