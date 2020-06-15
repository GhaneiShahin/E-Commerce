import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignIn_and_SignUp from "./pages/SignIn-and-SignUp/SignIn-and-SignUp";
import { auth } from "./firebase/firebase-utils";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignIn_and_SignUp} />
          <Route exaxt path="/" component={Homepage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
