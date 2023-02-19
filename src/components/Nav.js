import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Nav.css";

export default function mNav() {
  const handleClick = (eventKey) => console.log(`${eventKey}`);
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav onSelect={handleClick}>
            <Nav.Item>
              <Nav.Link className="mx-4" eventKey="link-1" href="/frinder/newfriends">
                New friends
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className=" mx-4" eventKey="link-2" href="/frinder/chat">
                Chat
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mx-4" eventKey="link-3" href="/frinder/map">
                Map
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mx-4" eventKey="link-4" href="/frinder/events">
                Events
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
