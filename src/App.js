import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Homepage from "./containers/Homepage/Homepage";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exaxt path="/" component={Homepage} />
      </Switch>
    </Fragment>
  );
};

export default App;
