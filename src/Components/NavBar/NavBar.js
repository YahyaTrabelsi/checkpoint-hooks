import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddMovie from "../AddMovie/AddMovie";
import { NavLink } from "react-router-dom";

const NavBar = ({ addMovie }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Movies App</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="favorite">Favorite</NavLink>
          </Nav>

          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
