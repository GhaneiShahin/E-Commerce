import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase-utils";

const Header = () => {
  const state = useSelector((state) => state.user.currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {state ? <h5 className="option">WELCOME {state.displayName.toUpperCase()}</h5> : null}
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {state ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
