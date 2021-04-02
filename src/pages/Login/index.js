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
    <Container className="h-100 form-coupon-add-signup">
      <Jumbotron className="my-4" style={{ background: "black" }}>
        <legend className="text-center">
          <h3
            style={{
              color: "#6065FF",
              fontFamily: "'Dela Gothic One', cursive",
              transform: "translate3d(-10px, -10px, 0px)",
              textShadow:
                "1px 1px #00E7FF, 2px 2px #00E7FF, 3px 3px #00E7FF, 4px 4px #00E7FF, 5px 5px #00E7FF, 6px 6px #00E7FF, 7px 7px #00E7FF, 8px 8px #00E7FF, 9px 9px #00E7FF, 10px 10px #00E7FF",
            }}
          >
            Login to SubSwap
          </h3>
          <hr />
        </legend>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>🍩 Email address</Form.Label>
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
            <Form.Label>🍘 Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button className="form_button_coupon" type="submit">
            Log in 🍜
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
