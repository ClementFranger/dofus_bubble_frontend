import React from "react";
import { Route, Switch } from "react-router-dom";
import Professions from "./containers/Professions";
import Familiers from "./containers/Familiers";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Professions />
      </Route>
      <Route exact path="/familiers">
        <Familiers />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
