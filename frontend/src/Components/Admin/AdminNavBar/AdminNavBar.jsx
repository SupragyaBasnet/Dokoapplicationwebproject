import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import navProfile from "../../Assets/nav-profile.svg";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../Assets/logo.png";

const AdminNavBar = () => {
  console.log("Admin Navbar Mounted");
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/admin">
            <Navbar.Brand href="#home">
              <Image
                src={logo}
                alt="Logo"
                className="d-inline-block align-center"
              />{" "}
              <br />
              DOKO Admin
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/admin/addproduct">
                <Nav.Link>Add Product</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/listproduct">
                <Nav.Link>List Product</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/vieworder">
                <Nav.Link>View Order</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
              <LinkContainer to="">
                <Nav.Link href="#home">
                  <Image
                    src={navProfile}
                    alt="Profile"
                    className="nav_profile "
                  />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default AdminNavBar;
