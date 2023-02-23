import React from "react";

/*A komponens stílusának importálása*/
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    /*StyledHeader az eredeti header HTML elem stílusa*/
    <StyledHeader>
      <h1>Hubble</h1>
    </StyledHeader>
  );
};

export default Header;
