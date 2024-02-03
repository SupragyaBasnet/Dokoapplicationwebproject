import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./Login";
import React from "react";
import "./CSS/LoginSignup.css";

function LoginSignup() {
  return (
    <Container fluid className="login">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="my-4">
            <h1 className="text-center">SignUp</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="Phone-Number"
                  placeholder="Enter Phone Number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="Password" placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-3">
                Signup
              </Button>
              <p>
                Already have an account? <a href="/login">Login here</a>
              </p>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="By continuing, I agree to the terms of use and privacy policy"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* Display the Login component when the URL matches "/login" */}
      {window.location.pathname === "/login" && <Login />}
    </Container>
  );
}

export default LoginSignup;
