import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const PasswordReset = () => {
  return (
    <Container
      className="h-100 my-4"
      style={{
        marginTop: "30px",
      }}
    >
      {/* <legend className="text-center alert-box-2">
        🥝 Verification code sent to{" "}
        <u
          style={{
            color: "rgb(255, 208, 121)",
          }}
        >
          {auth.user?.email}
        </u>
      </legend> */}
      <hr />
      <Form className="center-content">
        <Form.Group>
          <Form.Label>🍄 Enter your email</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
        <div
          style={{
            display: "flex",
          }}
        >
          <Button type="submit" className="submit_button">
            Send Code
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PasswordReset;
