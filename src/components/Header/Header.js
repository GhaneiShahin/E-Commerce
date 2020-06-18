import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase-utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.toggleCart.hidden);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {user ? (
          <h5 className="option">WELCOME {user.displayName.toUpperCase()}</h5>
        ) : null}
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cart ? <CartDropdown /> : null}
    </div>
  );
};

export default memo(Header);
