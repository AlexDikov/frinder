import React from "react";
import { Button } from "react-bootstrap";
import "./NewFriends.css";
import brad from "../images/brad.jpg";
import male from "../images/male.png";

export default function NewFriends() {
  return (
    <div className="Profile__container container" style={{ justifyContent: "center" }}>
      <div className=" rounded newfriends__container">
        <img src={brad} className="newfriends__image" />
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
          <h2>Brad</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={male} style={{ height: "24px", marginTop: "7px", marginRight: "5px" }} />
            <h2>51</h2>
          </div>
        </div>
        <h3 style={{ textAlign: "start", paddingLeft: "10px" }}>Los-Angeles</h3>
        <p style={{ textAlign: "start", padding: "10px" }}>
          I like to participate in some cinematographic events, have a huge family, castle in France and motorcycle
          "Ural"
        </p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "10px" }}>
          <Button variant="outline-success">NOICE</Button>
          <Button variant="outline-danger">NOUP</Button>
        </div>
      </div>
    </div>
  );
}
