import "./Header.css";
import HeaderMenu from "./HeaderMenu";
import Nav from "./Nav";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Header(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="Header">
      <h1 className="Header__name">Frinder</h1>
      {props.isLoggedIn && <Nav />}
      <HeaderMenu
        isLoggedIn={props.isLoggedIn}
        onSignUpModalShow={props.onSignUpModalShow}
        onSignInModalShow={props.onSignInModalShow}
        title={props.isLoggedIn ? currentUser.name : "Account"}
        btnOneTitle={props.isLoggedIn ? "My profile" : "Sign Up"}
        btnTwoTitle={props.isLoggedIn ? "Sign out" : "Sign In"}
      />
    </div>
  );
}
