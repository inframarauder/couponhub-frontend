import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MidSection = () => {
  return (
    <Jumbotron fluid>
      <Container className="center-content">
        <p className="display-3">CouponHub</p>
        <p>Ek haath se dene ka, doosre haath se lene ka....</p>
        <p>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign Up
          </Button>
        </p>
        <p>
          Already have an account? &nbsp;<Link to="/login">Log In</Link>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default MidSection;
