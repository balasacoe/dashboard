import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: #ff4552;
    margin-left:10px
  }
`;

const ATCButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default ATCButton;