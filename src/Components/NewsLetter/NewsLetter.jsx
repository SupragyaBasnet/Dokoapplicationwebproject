import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap"; // Import Bootstrap components
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <Container className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Form>
            <InputGroup className="mb-3">
              <Form.Control type="email" placeholder="Your Email id" />
              <Button variant="primary">Subscribe</Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsLetter;
