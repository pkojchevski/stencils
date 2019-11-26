import React, { useContext, useEffect } from "react";
import "./App.scss";
import { Switch, Route, __RouterContext, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { setAuthToken } from "./axios/api";
import jwt_decode from "jwt-decode";
import { createStructuredSelector } from "reselect";

import { useTransition, animated, config } from "react-spring";

import Header from "./components/header/header.component";
import TablePage from "./page/table/table.components";
import SearchPage from "./page/search/search.component.jsx";
import SigninPage from "./page/signin/signin.component";

import { selectCurrentUser, selectIsAuth } from "./redux/user/user.selector";
import { getCurrentUserStart, signoutStart } from "./redux/user/user.actions";

const App = ({ isAuth, getCurrentUserStart, dispatch }) => {
  useEffect(() => {
    if (localStorage.token) {
      const decode = jwt_decode(localStorage.token);
      // check if token expired
      if (decode.exp < Date.now() / 1000) {
        dispatch(signoutStart());
      } else {
        setAuthToken(localStorage.token);
        getCurrentUserStart(localStorage.token);
      }
    }
  }, []);
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });

  return (
    <main className="app-container">
      <Header path={location.pathname} />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route
              exact
              path="/"
              render={() =>
                isAuth ? <TablePage /> : <Redirect to="/signin" />
              }
            />
            <Route
              exact
              path="/signin"
              render={() => (isAuth ? <Redirect to="/" /> : <SigninPage />)}
            />
            <Route
              exact
              path="/table"
              render={() =>
                isAuth ? <TablePage /> : <Redirect to="/signin" />
              }
            />
            <Route exact path="/search" component={SearchPage} />
          </Switch>
        </animated.div>
      ))}
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isAuth: selectIsAuth
});

const mapDispatchToProps = dispatch => ({
  getCurrentUserStart: token => dispatch(getCurrentUserStart(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
