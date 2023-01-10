import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dropdown from "./Dropdown";
import "./Main.css";

export default function Main(props) {
  return (
    <>
      <Header
        dropdown={
          <Dropdown
            onSignUpModalShow={props.onSignUpModalShow}
            onSignInModalShow={props.onSignInModalShow}
            title="Account"
            btnOneTitle="Sign Up"
            btnTwoTitle="Sign In"
          />
        }
      />
      <div className="Main">
        <h1 className="Main__slogan">LIMITLESS FRIENDS ACCESS</h1>
        <h2>IT'S LIKE GRINDER, BUT YOU DON'T HAVE TO FUCK WITH THESE GUYS!</h2>
      </div>
      <Footer />
    </>
  );
}
