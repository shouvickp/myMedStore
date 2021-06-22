import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar
        bg=""
        expand="lg"
        fixed="top"
        className="topnav px-5"
        collapseOnSelect
      >
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image src="/images/logo.svg" width="70" />
          </Navbar.Brand>
        </LinkContainer>
        <form className="mt-1 d-none d-lg-flex w-60">
          <div class="input-group input-group-lg mb-1">
            <input
              type="Search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="Search-btn"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="Search-btn"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i> Sign In / signup
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

        <div className="col-12 d-block d-md-none">
          <form>
            <div class="input-group mb-3">
              <input
                type="Search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="Search-btn"
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="Search-btn"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </Navbar>
    </header>
  );
};
export default Header;
