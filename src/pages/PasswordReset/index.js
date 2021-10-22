import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { Spinner } from "../../components";
import api from "../../utils/api";

const PasswordReset = () => {
  const [mailSent, setMailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [resetDone, setResetDone] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!mailSent) {
        const { data } = await api.sendPasswordResetMail({ email });
        setMessage(data.message);
        setMailSent(true);
        localStorage.setItem("email", email);
      } else {
        const storedEmail = localStorage.getItem("email");
        const payload = { email: storedEmail, code, password };
        const { data } = await api.resetPassword(payload);
        setMessage(data.message);
        setResetDone(true);
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.error);
      }
    }
    setLoading(false);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Container
      className="h-100 my-4"
      style={{
        marginTop: "30px",
      }}
    >
      {mailSent ? (
        <>
          <legend className="text-center alert-box-2">{message}</legend>
          {resetDone ? (
            <a href="/login" className="center-content">
              <Button className="submit_button">Back to Login Page 😃</Button>
            </a>
          ) : (
            <Form className="center-content" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>🍄 Enter the code you received</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="The secret key we sent you"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>🍄 Enter your new password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Your new secret key"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>

              <div
                style={{
                  display: "flex",
                }}
              >
                <Button type="submit" className="submit_button">
                  Reset Password
                </Button>
              </div>
            </Form>
          )}
        </>
      ) : (
        <Form className="center-content" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>🍄 Enter your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your digital address"
              htmlSize={40}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="off"
            />
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
      )}
    </Container>
  );
};

export default PasswordReset;
