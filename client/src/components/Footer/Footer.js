import React from 'react';
import Container from 'react-bootstrap/Container';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <Container fluid className="footer" sticky="bottom">
        <footer>
          <div>
          <a href="https://www.linkedin.com/in/sunwoong-kim-136b061b6/"><i className="fab fa-linkedin fa-2x"></i>LinkedIn</a>
          </div>
          By <a href="https://github.com/mattswkim/">Sunwoong Kim</a>
        </footer>
      </Container>
    </div>
  )
}

export default Footer;