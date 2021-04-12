import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import api from "../../utils/api";
import { Spinner } from "../../components";
import { verifyEmail } from "../../redux/actions/auth.actions";

const Verification = ({ auth, verifyEmail }) => {
  useEffect(
    () =>
      !auth.loading &&
      !auth.user?.isEmailVerified &&
      api.sendVerifiationEmail(),
    [auth.user?.isEmailVerified, auth.loading]
  );

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

  return auth.user?.isEmailVerified ? (
    <Container className="h-100 my-4">
      <p
        className="text-center"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://media.giphy.com/media/6nZYNpm9icrCm7eAoF/giphy.gif"
          width="150px"
          style={{ float: "right" }}
          alt="verification-form-gif"
        />
        <p
          className="text-center display-4"
          style={{ marginTop: "10px", fontSize: "35px" }}
        >
          🎊 Your email is verified
        </p>
        <a href="/coupons">
          <Button className="submit_button">Back to Coupons 😃</Button>
        </a>
      </p>
    </Container>
  ) : auth.loading ? (
    <Spinner />
  ) : (
    <Container
      className="h-100 my-4"
      style={{
        marginTop: "30px",
      }}
    >
      <legend className="text-center alert-box-2">
        🥝 Verification code sent to{" "}
        <u
          style={{
            color: "rgb(255, 208, 121)",
          }}
        >
          {auth.user?.email}
        </u>
      </legend>
      <hr />
      <Form className="center-content" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>🍄 Enter the code</Form.Label>
          <Form.Control
            type="number"
            name="code"
            value={formData.code}
            onChange={handleChange}
          />
        </Form.Group>
        <div
          style={{
            display: "flex",
          }}
        >
          <Button
            variant="secondary"
            className="resend_button"
            onClick={handleResend}
          >
            Resend
          </Button>
          <Button type="submit" className="submit_button">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) => ({
  verifyEmail: (body) => dispatch(verifyEmail(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Verification);
