import React from "react";
import { Card, Button } from "react-bootstrap";

const CouponCard = ({ coupon, showBuy, handleBuy }) => {
  return (
    <Card className="my-4">
      <Card.Header>
        <Card.Text>
          <span>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <b className="coupon_title">
                  {coupon.title.substring(0, 70) + "..."}
                </b>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <small className="coupon_tag" style={{ float: "right" }}>
                  {coupon.type.toUpperCase()}
                </small>
              </div>
            </div>
          </span>
        </Card.Text>
      </Card.Header>
      <Card.Body>
        <span
          className="expiry_date"
          style={{
            background: "#ff4b7f",
            padding: "3px 8px",
            margin: "5px 0px",
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
        <Card.Title style={{ marginTop: "5px" }}>
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
