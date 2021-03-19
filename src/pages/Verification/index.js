import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { verifyEmail } from "../../redux/actions/auth.actions";
import api from "../../utils/api";

const Verification = ({ auth, verifyEmail }) => {
  useEffect(() => !auth.user.isEmailVerified && api.sendVerifiationEmail(), []);

  const [formData, setFormData] = useState({ code: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyEmail(formData);
  };

  const handleResend = () => {
    window.location.reload();
  };

  return auth.user.isEmailVerified ? (
    <Container className="h-100 my-4">
      <p className="text-center display-4">Your email is verified</p>
      <p className="text-center">
        <a href="/coupon">Back to coupons</a>
      </p>
    </Container>
  ) : (
    <Container className="h-100 my-4">
      <legend className="text-center">
        Verification code sent to {auth.user.email}
      </legend>
      <Form className="center-content" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter the code</Form.Label>
          <Form.Control
            type="number"
            name="code"
            value={formData.code}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <br />
        <Button variant="secondary" onClick={handleResend}>
          Resend
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) => ({
  verifyEmail: (body) => dispatch(verifyEmail(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Verification);
