import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";

const MidSection = ({ auth }) => {
  return (
    <Jumbotron fluid style={{ background: "rgb(20,20,20)" }}>
      <Container>
        <div className="row">
          <div className="col-lg-6 col-md-6 page-content">
            <p className="display-3">
              {" "}
              <b
                className="page-title"
                style={{ color: "rgb(127, 112, 255)", fontWeight: "700" }}
              >
                CouponHub
              </b>{" "}
            </p>
            <p style={{ color: "white", fontWeight: "700" }}>
              👊 Et tu coupon? then just swap . . .
            </p>
            {!auth.isLoggedIn && (
              <>
                <p>
                  <br />
                  <Button
                    className="sign_up_button"
                    style={{ marginRight: "10px", fontWeight: "700" }}
                    size="lg"
                    onClick={() => (window.location.href = "/signup")}
                  >
                    Sign Up 🤯
                  </Button>
                  <Button
                    className="sign_up_button"
                    style={{
                      marginRight: "10px",
                      fontWeight: "700",
                      background: "rgb(255, 167, 66)",
                      border: "none",
                    }}
                    size="lg"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Log in 😋
                  </Button>
                </p>
                <br />
              </>
            )}
          </div>

          <div className="col-lg-6 col-md-6">
            <img
              className="hero-image"
              src="https://media.giphy.com/media/J147q8Ip0EmLQFJOPZ/giphy.gif"
              width="80%"
              style={{ borderRadius: "10px" }}
              alt="coupon"
            />
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(MidSection);
