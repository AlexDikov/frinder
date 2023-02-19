import "./Header.css";
import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Nav from "./Nav";
import { Button } from "react-bootstrap";

export default function Header(props) {
  //const [mainMenu, setMainMenu] = React.useState(null);

  return (
    <div className="Header">
      <h1 className="Header__name">Frinder</h1>
      {props.isLoggedIn && <Nav />}
      <HeaderMenu
        isLoggedIn={props.isLoggedIn}
        onSignUpModalShow={props.onSignUpModalShow}
        onSignInModalShow={props.onSignInModalShow}
        title={props.isLoggedIn ? "Alex" : "Account"}
        btnOneTitle={props.isLoggedIn ? "My profile" : "Sign Up"}
        btnTwoTitle={props.isLoggedIn ? "Sign out" : "Sign In"}
      />
    </div>
  );
}
//<Dropdown onSignUpModalShow={props.onSignUpModalShow} onSignInModalShow={props.onSignInModalShow} />
