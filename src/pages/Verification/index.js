import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../utils/api";
import { Spinner } from "../../components";

const Verification = ({ auth }) => {
  useEffect(() => !auth.user?.isEmailVerified && api.sendVerifiationEmail(), [
    auth.user?.isEmailVerified,
  ]);

  const [formData, setFormData] = useState({ code: "" });
  const [loading, setLoding] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoding(true);
    try {
      const { data } = await api.verifyEmail(formData);
      toast.success(data.message);
      localStorage.setItem("token", data.token); //reset jwt with updated token
      window.location.reload();
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.error);
      }
    }
    setLoding(false);
  };

  const handleResend = () => {
    window.location.reload();
  };

  return auth.user?.isEmailVerified ? (
    <Container className="h-100 my-4">
      <p className="text-center display-4">Your email is verified</p>
      <p className="text-center">
        <a href="/coupons">Back to coupons</a>
      </p>
    </Container>
  ) : loading ? (
    <Spinner />
  ) : (
    <Container className="h-100 my-4">
      <legend className="text-center">
        Verification code sent to {auth.user?.email}
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

export default connect(mapStateToProps, null)(Verification);
