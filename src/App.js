import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route exaxt path="/" component={Homepage} />
      </Switch>
    </Fragment>
  );
};

export default App;
