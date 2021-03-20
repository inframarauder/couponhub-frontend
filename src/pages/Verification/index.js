import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../utils/api";
import { Spinner } from "../../components";

const Verification = ({ auth }) => {
  useEffect(
    () =>
      !auth.loading &&
      !auth.user?.isEmailVerified &&
      api.sendVerifiationEmail(),
    [auth.user?.isEmailVerified, auth.loading]
  );

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
        />
        <p
          className="text-center display-4"
          style={{ marginTop: "10px", fontSize: "35px" }}
        >
          🎊 Your email is verified
        </p>
        <br />
        <a href="/coupons">
          <Button className="submit_button">Back to Coupons 😃</Button>
        </a>
      </p>
    </Container>
  ) : loading ? (
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

export default connect(mapStateToProps, null)(Verification);
