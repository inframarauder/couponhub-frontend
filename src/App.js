import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { checkAuth } from "./redux/actions/auth.actions";
import { store, persistor } from "./redux/store";
import { Header, Footer, NotFound, Spinner, PrivateRoute } from "./components";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import Coupons from "./pages/Coupons";
import MyCoupons from "./pages/MyCoupons";
import CreateCoupon from "./pages/CreateCoupon";
import PasswordReset from "./pages/PasswordReset";

function App() {
  useEffect(() => store.dispatch(checkAuth()), []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={Spinner} persistor={persistor}>
          <Router>
            <Header />
            <ToastContainer />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login} />
              <Route path="/password_reset" exact component={PasswordReset} />
              <PrivateRoute
                path="/verification"
                exact
                component={Verification}
              />
              <PrivateRoute path="/coupons" exact component={Coupons} />
              <PrivateRoute path="/my_coupons" exact component={MyCoupons} />
              <PrivateRoute
                path="/post_coupon"
                exact
                component={CreateCoupon}
              />

              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
