import React from "react";
import head from "../images/head.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1 className="Header__name">Frinder</h1>
      <div>
        <button className="Header__btn">SIGN IN</button>
        <button className="Header__btn">SING UP</button>
      </div>
    </div>
  );
}
