import React from "react";
import styled from "@emotion/styled";

const Footer = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FooterContent = () => {
  return <Footer>Continue evoluindo com a Descomplica.</Footer>;
};

export default FooterContent;
