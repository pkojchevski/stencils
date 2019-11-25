import React, { useContext } from "react";
import "./App.scss";
import { Switch, Route, __RouterContext, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { useTransition, animated } from "react-spring";

import Header from "./components/header/header.component";
import TablePage from "./page/table/table.components";
import SearchPage from "./page/search/search.component.jsx";
import SigninPage from "./page/signin/signin.component";

import { selectCurrentUser, selectIsAuth } from "./redux/user/user.selector";

const App = ({ currentUser, isAuth }) => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(50%, 0)" }
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
              path="/table"
              render={() =>
                isAuth ? <TablePage /> : <Redirect to="/signin" />
              }
            />
            <Route exact path="/search" component={SearchPage} />
            <Route
              exact
              path="/signin"
              render={() => (isAuth ? <Redirect to="/" /> : <SigninPage />)}
            />
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

export default connect(mapStateToProps)(App);
