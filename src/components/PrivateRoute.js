import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "./Spinner";

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return auth.loading ? (
    <Spinner />
  ) : (
    <Route
      {...rest}
      render={(props) =>
        auth.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
