import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineUpdate } from "react-icons/md";

const NavbarNews = ({ setCategory }) => {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        className="text-body-tertiary py-3"
      >
        <Container>
          <Navbar.Brand onClick={() => setCategory("general")} className="logo">
            <button
              type="button"
              class="btn btn-warning position-relative fs-5"
            >
              Daily Upadtes <MdOutlineUpdate />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                News
              </span>
            </button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => setCategory("business")}
                className="category"
              >
                Business
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("entertainment")}>
                Entertainment
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("health")}>Health</Nav.Link>
              <Nav.Link onClick={() => setCategory("science")}>
                Science
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("sports")}>Sports</Nav.Link>
              <Nav.Link onClick={() => setCategory("technology")}>
                Technology
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarNews;
