import React from "react";
import "./Card.css";
import Buddy from "../images/Buddy.gif";

export default function Card() {
  return (
    <div className="Card">
      <img className="Card__image" src={Buddy} />
      <p className="Card__note">
        Choose wright friends
        <br />
        No more fate!
      </p>
    </div>
  );
}
