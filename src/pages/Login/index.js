import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import { login } from "../../redux/actions/auth.actions";
import { Redirect } from "react-router-dom";
import { Spinner } from "../../components";

const Login = ({ auth, login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return auth.loading ? (
    <Spinner />
  ) : auth.isLoggedIn ? (
    <Redirect to="/coupons" />
  ) : (
    <Container className="h-100">
      <Jumbotron className="my-4">
        <legend className="text-center">
          Login to CouponHub
          <hr />
        </legend>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: (body) => dispatch(login(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
