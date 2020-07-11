import React from "react";
import { Route, Switch } from "react-router-dom";
import Crafts from "./containers/Crafts";
import Price from "./containers/Price";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Crafts />
      </Route>
      <Route exact path="/price">
        <Price />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
