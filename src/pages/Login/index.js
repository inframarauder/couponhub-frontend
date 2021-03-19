import React from "react";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="h-100">
      <Jumbotron className="my-4">
        <legend className="text-center">
          Login to CouponHub
          <hr />
        </legend>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
};

export default Login;
