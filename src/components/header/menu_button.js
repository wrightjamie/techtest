import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export const MenuButton = ({ onClickCallback, open }) => {
  return (
    <MenuButtonHolder>
      <StyledMenuButton onClick={onClickCallback} open={open}>
        <div></div>
        <div></div>
        <div></div>
      </StyledMenuButton>
    </MenuButtonHolder>
  );
};

const StyledMenuButton = styled.button`
  border-radius: 100%;
  background-color: transparent;
  margin: var(--gap);
  border: none;
  cursor: pointer;
  padding: 0;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  transition: all 0.3s ease;
  &:hover,
  &:focus {
    background-color: var(--col-header);
    box-shadow: 0 0 var(--half-gap) var(--half-gap) var(--col-header);
    div {
      opacity: 1;
    }
  }

  div {
    border-radius: 0.1rem;
    width: 1.65rem;
    height: 0.2rem;
    background-color: var(--col-light);
    opacity: 0.7;

    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      ${({ open }) => (open ? "opacity: 0;" : "")}
      transform: ${({ open }) => (open ? "translateX(10px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MenuButtonHolder = styled.div`
  display: none;
  margin-left: auto;
  //margin-right: calc(2 * var(--gap));
  position: fixed;
  top: var(--half-gap);
  right: calc(2.5 * var(--gap));
  height: calc(var(--headerHeight) - var(--gap));
  width: calc(var(--headerHeight) - var(--gap));
  align-items: center;
  justify-content: center;

  @media (max-width: 50em) {
    display: flex;
  }
`;
