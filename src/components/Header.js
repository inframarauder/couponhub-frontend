import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth.actions";
import { Alert, Button, Navbar, Nav, Dropdown } from "react-bootstrap";

const Header = ({ auth, logout }) => {
  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  const shouldShowAlert = () => {
    const isVerificationPage = window.location.href.includes("verification");
    const isEmailVerified = auth.user?.isEmailVerified;

    return !auth.loading && !isEmailVerified && !isVerificationPage;
  };

  return auth.isLoggedIn ? (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
        <Navbar.Brand href="/">
          <img
            src="https://media.giphy.com/media/cJY9brU09bZf1StnQC/giphy.gif"
            width="60px"
            alt="nav-brand-gif"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-4">
            <Nav.Link href="/coupons" active className="header_link">
              ⚔️ Explore
            </Nav.Link>
            <Nav.Link href="/my_coupons" active className="header_link">
              🤠 My Coupons
            </Nav.Link>
            <Nav.Link href="/post_coupon" active className="header_link">
              💜 Add a Coupon
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto mr-4">
            <Dropdown drop="left">
              <Dropdown.Toggle id="dropdown-basic">
                {
                  <img
                    src="https://media.giphy.com/media/JUHO9F08TV1WoaBH6G/giphy.gif"
                    width="60px"
                    alt="dropdown-toggle-gif"
                  />
                }
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="dropdown_link">
                  <div class="username_dropdown">
                    <strong>😃 {auth.user?.name}</strong>
                    <br />
                    <small>{auth.user?.email}</small>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item className="credits dropdown_link">
                  Credits :{" "}
                  <span
                    style={{
                      background: "rgba(32, 32, 31, 0.4)",
                      padding: "5px 10px",
                      marginLeft: "5px",
                      borderRadius: "5px",
                      color: "white !important",
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                  >
                    {auth.user?.credits}{" "}
                    <img
                      src="https://media.giphy.com/media/QxjapRWD37qqPfI5xy/giphy.gif"
                      width="30px"
                      alt="credits-gif"
                    />
                  </span>
                </Dropdown.Item>
                <hr />
                <Dropdown.Item
                  className="Logout_button dropdown_link"
                  onClick={() => handleLogout()}
                >
                  Logout &nbsp;&nbsp;<i class="fas fa-radiation"></i>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {shouldShowAlert() && (
        <>
          <Alert variant="warning" className="center-content alert-box">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                Please verify your email to sell or buy coupons.
                <br />
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = "/verification")}
                >
                  Verify Now 😔
                </Button>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <img
                  src="https://media.giphy.com/media/Z9hdaqcDgk79nRmZze/giphy.gif"
                  width="100px"
                  style={{ float: "right" }}
                  alt="verify-gif"
                />
              </div>
            </div>
          </Alert>
        </>
      )}
    </>
  ) : (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">CouponHub</Navbar.Brand>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
