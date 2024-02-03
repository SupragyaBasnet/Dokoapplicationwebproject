// Login.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./CSS/LoginSignup.css"; // Make sure to import your CSS file

function Login() {
  return (
    <Container fluid className="login">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="my-4">
            <h1 className="text-center">Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="Username" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <p>
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>

              <Button variant="primary" type="submit" className="mb-3">
                Login
              </Button>
              {/* Don't have an account? Signup here link */}
              <p>
                Don't have an account? <Link to="/signup">Signup here</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
