import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../utils/api";
import Spinner from "./Spinner";

const CouponCard = ({ coupon, showBuy, handleBuy, showReport }) => {
  const [show, setShow] = useState(false);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.reportCoupon({ couponId: coupon._id, reason });
      toast.info(data.message);
    } catch (error) {
      console.error(error);
      if (error.response.data) {
        toast.error(error.response.data.error);
      }
    }
    setLoading(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Card className="my-4" style={{ height: "24rem" }}>
        <Card.Header>
          <Card.Text>
            <span>
                  <b className="coupon_title">{coupon.title}</b>
                {/* <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <small className="coupon_tag" style={{ float: "left" }}>
                    {coupon.type.toUpperCase()}
                  </small>
                </div> */}
            </span>
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <span
            className="expiry_date"
            style={{
              background: "#ff4b7f",
              padding: "3px 8px",
              margin: "2px 0px",
              borderRadius: "5px",
              color: "white !important",
              textAlign: "center",
              whiteSpace: "nowrap",
              fontWeight: "700",
              position: "relative",
              top: "-8px",
              fontSize: "13px",
            }}
          >
            @ {coupon.redeemPlatform}
          </span>
          {coupon.category && (
            <span className="expiry_date"
            style={{
              background: "rgb(255, 150, 29)",
              padding: "3px 8px",
              margin: "2px 0px 5px 6px",
              borderRadius: "5px",
              color: "white !important",
              textAlign: "center",
              whiteSpace: "nowrap",
              fontWeight: "700",
              position: "relative",
              top: "-8px",
              fontSize: "12px",
            }}
            >
              {coupon.category}
            </span>
          )}
          {coupon.type && (
            <span className="expiry_date"
            style={{
              background: "rgb(255, 150, 29)",
              padding: "3px 8px",
              margin: "2px 0px 5px 6px",
              borderRadius: "5px",
              color: "white !important",
              textAlign: "center",
              whiteSpace: "nowrap",
              fontWeight: "700",
              position: "relative",
              top: "-8px",
              fontSize: "12px",
            }}
            >
              {coupon.type}
            </span>
          )}
          <Card.Title style={{ marginTop: "5px" }}>
            <b>{coupon.code}</b>
          </Card.Title>

          <Card.Text>{coupon.description}</Card.Text>

          <Card.Text>
            Expires On{" "}
            <span
              className="expiry_date"
              style={{
                background: "rgba(32, 32, 31, 0.4)",
                padding: "5px 10px",
                marginLeft: "5px",
                borderRadius: "5px",
                color: "white !important",
                textAlign: "center",
                whiteSpace: "nowrap",
                fontWeight: "700",
              }}
            >
              {new Date(coupon.expiryDate).toDateString()}{" "}
            </span>
          </Card.Text>
          <Card.Text>
            <small>
              Posted By
              <br />
            </small>{" "}
            <span className="posted_name">
              {coupon.postedBy ? coupon.postedBy.name : "User from Asgard ⛈️"}
            </span>
          </Card.Text>
        </Card.Body>
        {showBuy && (
          <Card.Footer className="center-content">
            <Button
              variant="success"
              size="lg"
              className="buy_button"
              onClick={() => handleBuy(coupon._id)}
            >
              Get it now
            </Button>
          </Card.Footer>
        )}
        {showReport && (
          <Card.Footer>
            <Button variant="danger" className="report_button" onClick={handleShow}>
              Report
            </Button>
          </Card.Footer>
        )}
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>😔 Report coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label style={{ color: "#ffffff",}}>🪧 State a reason</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                style={{ color: "#ffffff" }}
                value={reason}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Button variant="danger" className="report_button" type="submit">
              ✨ Submit report
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CouponCard;
