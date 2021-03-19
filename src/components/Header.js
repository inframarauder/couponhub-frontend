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

    return !auth.loading && (!isEmailVerified || isVerificationPage);
  };

  return auth.isLoggedIn ? (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">CouponHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-4">
            <Nav.Link href="/coupons" active>
              Browse Coupons
            </Nav.Link>
            <Nav.Link href="/my_coupons" active>
              My Coupons
            </Nav.Link>
            <Nav.Link href="/post_coupon" active>
              Post a Coupon
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto mr-4">
            <Dropdown drop="left">
              <Dropdown.Toggle id="dropdown-basic">
                {<i className="fa fa-user"></i>}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  Logged in as:
                  <br />
                  <strong>{auth.user?.name}</strong>
                  <br />
                  <small>({auth.user?.email})</small>
                </Dropdown.Item>
                <Dropdown.Item>Cerdits : {auth.user?.credits}</Dropdown.Item>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleLogout()}
                >
                  Logout
                </Button>
              </Dropdown.Menu>
            </Dropdown>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {shouldShowAlert() && (
        <>
          <Alert variant="warning" className="center-content">
            Please verify your email to sell or buy coupons.
            <br />
            <Button
              variant="primary"
              onClick={() => (window.location.href = "/verification")}
            >
              Verify Now!
            </Button>
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
