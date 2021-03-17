import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styles/NavStyle.css";

export default function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          The Bite-Sized Book Of Itty Bitty Blessings
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/blessings">Blessings</Nav.Link>
            <Nav.Link href="/blessings/new">New Blessing</Nav.Link>
            <Nav.Link href="https://www.reddit.com/r/SeriousConversation/wiki/resources">Find Support</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
