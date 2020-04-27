import React from "react";
import styled from "styled-components";
import { LikeButton } from "components/LikeButton";

export const App = () => {
  return (
    <Wrapper>
      <LikeButton
        buttonSize="300px"
        iconClr="#ff2e76"
        iconSize="150"
        activeClr="#ffa1c1"
        hoverClr="#ffd6e4"
        rippleClr="#ffd6e470"
      />

      <LikeButton
        buttonSize="200px"
        iconClr="#000"
        iconSize="100"
        activeClr="#00000040"
        hoverClr="#00000020"
        rippleClr="#00000070"
      />

      <LikeButton
        buttonSize="100px"
        iconClr="#b22eff"
        iconSize="50"
        activeClr="#dea1ff"
        hoverClr="#f5d6ff"
        rippleClr="#f5d6ff70"
      />
      <LikeButton
        buttonSize="200px"
        iconClr="#2e82ff"
        iconSize="100"
        activeClr="#a1cdff"
        hoverClr="#d6e6ff"
        rippleClr="#d6e6ff70"
      />
      <LikeButton
        buttonSize="50px"
        iconClr="#90ff2e"
        iconSize="25"
        activeClr="#c9ffbd"
        hoverClr="#ecffeb"
        rippleClr="#ecffeb70"
      />
      <LikeButton
        buttonSize="400px"
        iconClr="#2effa8"
        iconSize="200"
        activeClr="#b8ffec"
        hoverClr="#c6ffeb"
        rippleClr="#c6ffeb70"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
