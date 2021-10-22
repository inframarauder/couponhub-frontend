import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";

const MidSection = ({ auth }) => {
  return (
    <Jumbotron fluid style={{ background: "rgb(0,0,0)" }}>
      <Container>
        <div
          className="row"
          style={{
            background:
              "url('https://media.giphy.com/media/9JnM68uYkoQI2NCXuW/giphy.gif')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "2px",
          }}
        >
          <div className="col-lg-12 col-md-12 page-content text-center">
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
                    "1px 1px #0063db, 2px 2px #0063db, 3px 3px #0063db, 4px 4px #0063db, 5px 5px #0063db, 6px 6px #0063db, 7px 7px #0063db, 8px 8px #0063db, 9px 9px #0063db, 10px 10px #0063db",
                }}
              >
                CouponHub
              </span>
            </p>
            <p
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: "18px",
                width: "90%",
                maxWidth: "700px",
                margin: "5px auto",
              }}
            >
              What do you do with extra coupons that you would not need?
              <br /> What if you could swap them with something that you would
              use?
              <br />
              Sounds cool? You are at the right place ;)
            </p>
            <br />
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
        </div>
      </Container>
    </Jumbotron>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(MidSection);
