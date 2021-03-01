import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-dark text-white text-uppercase fixed-bottom pd-3"
    >
      @2021
    </Container>
  );
};

export default Footer;
