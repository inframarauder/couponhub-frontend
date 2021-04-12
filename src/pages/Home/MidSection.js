import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";

const MidSection = ({ auth }) => {
  return (
    <Jumbotron fluid style={{ background: "rgb(0,0,0)" }}>
      <Container>
        <div className="row">
          <div className="col-lg-6 col-md-6 page-content">
            <p className="display-3">
              {" "}
              {/* <b
                className="page-title"
                style={{ color: "rgb(127, 112, 255)", fontWeight: "700" }}
              >
                CouponHub
              </b>{" "} */}
              <span
                className="HeadLiner"
                style={{
                  color: "#ffffff",
                  fontFamily: "'Dela Gothic One', cursive",
                  transform: "translate3d(-10px, -10px, 0px)",
                  textShadow:
                    "1px 1px #F90566, 2px 2px #F90566, 3px 3px #F90566, 4px 4px #F90566, 5px 5px #F90566, 6px 6px #F90566, 7px 7px #F90566, 8px 8px #F90566, 9px 9px #F90566, 10px 10px #F90566",
                }}
              >
                CouponHub
              </span>
            </p>
            <p style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>
              What do you do with extra coupons that you would not need? What if
              you could swap them with something that you would use?
              <br />
              Sounds cool? You are at the right place ;)
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

            {auth.isLoggedIn && (
              <>
                <p>
                  <br />
                  <Button
                    className="sign_up_button"
                    style={{
                      marginRight: "10px",
                      fontWeight: "700",
                      background: "rgb(39, 39, 39) ",
                      border: "none",
                    }}
                    size="lg"
                    onClick={() => (window.location.href = "/coupons")}
                  >
                    ⚔️ Explore
                  </Button>
                  <Button
                    className="sign_up_button"
                    style={{
                      marginRight: "10px",
                      fontWeight: "700",
                      background: "rgb(39, 39, 39) ",
                      border: "none",
                    }}
                    size="lg"
                    onClick={() => (window.location.href = "/post_coupon")}
                  >
                    💜 Add a Coupon
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
