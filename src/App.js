import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignIn_and_SignUp from "./pages/SignIn-and-SignUp/SignIn-and-SignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { setCurrentUser } from "./store/actions/userActions/userAction";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignIn_and_SignUp} />
          <Route exaxt path="/" component={Homepage} />
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
