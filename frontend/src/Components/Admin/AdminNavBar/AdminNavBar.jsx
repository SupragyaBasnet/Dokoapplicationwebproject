// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import { Outlet } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
// import logo from "../../Assets/logo.png";

// const AdminNavBar = () => {
//   console.log("Admin Navbar Mounted");
//   return (
//     <>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <LinkContainer to="/admin">
//             <Navbar.Brand href="#home">
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 className="d-inline-block align-center"
//               />{" "}
//               <br />
//               DOKO Admin
//             </Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <LinkContainer to="/admin/addproduct">
//                 <Nav.Link>Add Product</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/admin/listproduct">
//                 <Nav.Link>List Product</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/admin/vieworder">
//                 <Nav.Link>View Order</Nav.Link>
//               </LinkContainer>
//             </Nav>
//             <Nav className="ms-auto">
//               <LinkContainer to="">
//                 <Nav.Link href="#home"></Nav.Link>
//               </LinkContainer>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Outlet />
//     </>
//   );
// };

// export default AdminNavBar;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Outlet, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../../Assets/logo.png";

const AdminNavBar = () => {
  console.log("Admin Navbar Mounted");

  const logout = () => {
    console.log("Logging out...");
    // Implement logout functionality here
  };

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
              <Nav.Item>
                <Button variant="danger" onClick={logout}>
                  Logout
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default AdminNavBar;
