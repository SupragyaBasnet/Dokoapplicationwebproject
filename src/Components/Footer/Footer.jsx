import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col xs={12} sm={6} md={3}>
          <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>DOKO</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="footer-social-icon">
            <div className="footer-icons-container">
              <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
              <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
              <img src={whatsapp_icon} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="footer-copyright">
            <hr />
            <p>&copy; 2024 - All Rights Reserved</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
