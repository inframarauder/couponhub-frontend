import React, { useState } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import {
  Container,
  Jumbotron,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { authenticate } from "../redux/actions/auth.actions";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const AuthForm = ({ type, auth, authenticate }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [passwordType, setPasswordType] = useState("password");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordType = () => {
    setPasswordType((state) => (state === "password" ? "text" : "password"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "login") {
      delete formData["name"];
    }
    authenticate(type, formData);
  };

  const handleGoogleAuth = (res) => {
    const { tokenId } = res;
    authenticate("google", { tokenId });
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
              color: "#ffffff",
              fontWeight: "700",
            }}
          >
            🤠 {type === "signup" ? "Signup for" : "Log in to"} CouponHub
          </h3>
          <hr />
        </legend>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <Button
              className="form_button_coupon"
              onClick={renderProps.onClick}
              disabled={false}
            >
              <i className="fa fa-google"></i> &nbsp; Continue with Google
            </Button>
          )}
          buttonText="Login"
          onSuccess={handleGoogleAuth}
          onFailure={(err) => {
            console.error(err);
            toast.error("Google login failed!");
          }}
          cookiePolicy={"single_host_origin"}
        />
        <hr />
        <h4 className="text-center">OR</h4>
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
          {type === "signup" && (
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
          )}

          <Form.Group>
            <Form.Label>🍘 Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={passwordType}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <InputGroup.Append>
                <InputGroup.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => togglePasswordType()}
                >
                  {passwordType === "password" ? (
                    <i className="fa fa-eye"></i>
                  ) : (
                    <i className="fa fa-eye-slash"></i>
                  )}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Button className="form_button_coupon" type="submit">
            {type === "signup" ? " Sign up 🤯" : "Log in 🍜"}
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
  authenticate: (type, body) => dispatch(authenticate(type, body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
