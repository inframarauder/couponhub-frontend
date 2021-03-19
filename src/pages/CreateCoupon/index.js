import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { Spinner } from "../../components";
import api from "../../utils/api";

const CreateCoupon = () => {
  const [formData, setFormData] = useState({
    code: "",
    expiryDate: "",
    sourcePlatform: "",
    redeemPlatform: "",
    type: "percentage",
    title: "",
    description: "",
    amount: 0,
  });
  const [loading, setLoading] = useState(false);

  const hideOrShowAmount = () => {
    return formData.type === "free" ? "hide" : "show";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.createCoupon(formData);
      toast.success(data.message);
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
    <Container className="h-100 my-4">
      <legend>
        Post a new coupon <hr />
      </legend>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Coupon Code</Form.Label>
          <Form.Control
            as="input"
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Row>
          <Col sm="6">
            <Form.Group>
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                as="input"
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                type="date"
                name="type"
                value={formData.type}
                onChange={handleChange}
                custom
              >
                <option value="percentage">Percentage</option>
                <option value="flat">Flat</option>
                <option value="free">Free</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group className={hideOrShowAmount()}>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            as="input"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Row>
          <Col sm="6">
            <Form.Group>
              <Form.Label>Source platform</Form.Label>
              <Form.Control
                as="input"
                type="text"
                name="sourcePlatform"
                value={formData.sourcePlatform}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group>
              <Form.Label>Redeem Platform</Form.Label>
              <Form.Control
                as="input"
                type="text"
                name="redeemPlatform"
                value={formData.redeemPlatform}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            as="input"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default CreateCoupon;
