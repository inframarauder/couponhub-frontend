import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth.actions";
import { Alert, Button, Navbar, Nav } from "react-bootstrap";

const Header = ({ auth, logout }) => {
  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return auth.isLoggedIn ? (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">CouponHub</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Navbar.Text>Signed in as: {auth.user.email}</Navbar.Text>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleLogout()}
              >
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {!auth.user.isEmailVerified && (
        <Alert variant="warning" className="center-content">
          Please verify your email to sell or buy coupons.
          <br />
          <Button variant="primary">Verify Now!</Button>
        </Alert>
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
