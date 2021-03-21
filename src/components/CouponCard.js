import React from "react";
import { Card, Button } from "react-bootstrap";

const CouponCard = ({ coupon, showBuy, handleBuy }) => {
  return (
    <Card className="my-4">
      <Card.Header>
        <Card.Text>
          <span>
            <b className="coupon_title">
              🤯 {coupon.title.substring(0, 20) + "..."}
            </b>
            <small className="coupon_tag" style={{ float: "right" }}>
              💰 {coupon.type.toUpperCase()}
            </small>
          </span>
        </Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <b>{coupon.code}</b>
        </Card.Title>
        <Card.Text
          style={{
            minHeight: "80px",
          }}
        >
          {coupon.description}
        </Card.Text>
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
            <img
              src="https://media.giphy.com/media/Ctdo2F6D4dZBnXyB7A/giphy.gif"
              width="30px"
              alt="expiry-gif"
            />
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
    </Card>
  );
};

export default CouponCard;
