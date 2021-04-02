import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import { signup } from "../../redux/actions/auth.actions";
import { Redirect } from "react-router-dom";
import { Spinner } from "../../components";

const Signup = ({ auth, signup }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return auth.loading ? (
    <Spinner />
  ) : auth.isLoggedIn ? (
    <Redirect to="/coupons" />
  ) : (
    <Container className="h-100 form-coupon-add-signup">
      <Jumbotron className="my-4" style={{ background: "black" }}>
        <legend className="text-center">
          <b
            style={{
              color: "rgb(255, 208, 121)",
              fontFamily: "'Dela Gothic One', cursive",
              transform: "translate3d(-10px, -10px, 0px)",
              textShadow:
                "1px 1px #F90566, 2px 2px #F90566, 3px 3px #F90566, 4px 4px #F90566, 5px 5px #F90566, 6px 6px #F90566, 7px 7px #F90566, 8px 8px #F90566, 9px 9px #F90566, 10px 10px #F90566",
            }}
          >
            Sign up @SubSwap
          </b>
          <hr />
        </legend>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>📬 Email address</Form.Label>
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
            <Form.Label>🤠 Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>🔐 Password</Form.Label>
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
            Sign up 🤯
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
  signup: (body) => dispatch(signup(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
