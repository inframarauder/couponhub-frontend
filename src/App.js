import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { checkAuth } from "./redux/actions/auth.actions";
import { store, persistor } from "./redux/store";
import { Header, Footer, NotFound, Spinner } from "./components";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    store.dispatch(checkAuth());
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={Spinner} persistor={persistor}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login} />

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
