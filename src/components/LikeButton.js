import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { IconFilled } from "./IconFilled";
import Ripples from "react-ripples";

export const LikeButton = ({
  hoverClr,
  activeClr,
  iconClr,
  buttonSize,
  iconSize,
  rippleClr,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked(!clicked);
  };

  return (
    <Wrapper>
      <Ripples color={rippleClr} during={900}>
        <LBContainer
          onClick={() => handleOnClick()}
          hoverClr={hoverClr}
          activeClr={activeClr}
          buttonSize={buttonSize}
        >
          {!clicked && <Icon fill={iconClr} iconSize={iconSize} />}
          {clicked && <IconFilled fill={iconClr} iconSize={iconSize} />}
        </LBContainer>
      </Ripples>
    </Wrapper>
  );
};

const LBContainer = styled.button`
  height: ${(props) => props.buttonSize};
  width: ${(props) => props.buttonSize};

  background: none;

  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.hoverClr};
  }

  &:active {
    background: ${(props) => props.activeClr};
  }

  &:focus {
    background: ${(props) => props.activeClr};
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 50%;
  overflow: hidden;
`;
