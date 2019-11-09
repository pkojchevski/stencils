import React, { useContext, useEffect } from "react";
import "./App.scss";
import { Switch, Route, __RouterContext } from "react-router-dom";

import { useTransition, animated } from "react-spring";

import Header from "./components/header/header.component";
import TablePage from "./page/table/table.components";
import SearchPage from "./page/search/search.component.jsx";

function App() {
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
            <Route exact path="/" component={TablePage} />
            <Route exact path="/table" component={TablePage} />
            <Route exact path="/search" component={SearchPage} />
          </Switch>
        </animated.div>
      ))}
    </main>
  );
}

export default App;
