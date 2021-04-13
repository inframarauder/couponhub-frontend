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
    category: "",
  });
  const [loading, setLoading] = useState(false);

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
    <div>
      <Container className="h-100 my-4 form-coupon-add">
        <legend>
          🥑 <b style={{ color: "rgb(255, 208, 121)" }}>Post a new coupon</b>{" "}
          <hr />
        </legend>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>💸 Coupon Code / Redeem Link</Form.Label>
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
                <Form.Label>⏰ Expiry Date</Form.Label>
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
                <Form.Label>🦄 Type</Form.Label>
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
          <Form.Group>
            <Form.Label>💰 Cateogory</Form.Label>
            <Form.Control
              as="select"
              name="category"
              onChange={handleChange}
              custom
            >
              {[
                "All",
                "Food",
                "Fashion",
                "Education",
                "Tech",
                "Healthcare",
                "Lifestyle",
                "Finance",
                "Shopping",
                "Streaming",
                "Gaming",
                "Travel",
                "Utilities",
                "Other",
              ].map((cat, i) => (
                <option value={cat} key={i}>
                  {cat}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Row>
            <Col sm="6">
              <Form.Group>
                <Form.Label>✈️ Source platform</Form.Label>
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
                <Form.Label>🚁 Redeem Platform</Form.Label>
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
            <Form.Label>🔀 Coupon Title</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>⏯️ Description of the Coupon</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" className="form_button_coupon">
            Post Coupon 🥂
          </Button>
          <br />
          <br />
          <br />
        </Form>
      </Container>
    </div>
  );
};

export default CreateCoupon;
