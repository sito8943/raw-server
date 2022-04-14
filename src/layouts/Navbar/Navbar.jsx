/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from "react";

// codememe2share
import { Container, LinkButton, Paragraph } from "codememe2share";

// styles
import NavbarCss, { LinkToNPMCss } from "./styles";

const Navbar = () => {
  return (
    <Container ignoreDefault className={NavbarCss}>
      <Paragraph>
        CodeMeme2Share{" "}
        <LinkButton
          className={LinkToNPMCss}
          link="https://www.npmjs.com/package/codememe2share"
          ignoreDefault
        >
          @1.12.14
        </LinkButton>
      </Paragraph>
    </Container>
  );
};

export default Navbar;
