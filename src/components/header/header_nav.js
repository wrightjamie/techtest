import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import {
  UtilityContainer,
  UtilityFlex,
  UtilityNavList,
} from "../utils/utility";
import { SocialItems } from "../utils/social_items";

const Nav = ({ links }) => {
  const [isMenuOpen, setMenuState] = useState(false);
  const onClick = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <>
      <StyledNav as="nav" open={isMenuOpen} data-menuopen={isMenuOpen}>
        <SocialItems />
        <NavItems>
          {links.map((link) => (
            <li key={link.link.id}>
              <a href={link.link.url}>{link.link.content}</a>
            </li>
          ))}
        </NavItems>
      </StyledNav>
      <Overlay open={isMenuOpen} />
      <MenuButtonHolder>
        <MenuButton onClick={onClick} open={isMenuOpen}>
          <div></div>
          <div></div>
          <div></div>
        </MenuButton>
      </MenuButtonHolder>
    </>
  );
};

export default Nav;

const NavItems = styled(UtilityNavList)`
  @media (max-width: 50em) {
    display: flex;
    flex-direction: column;
    padding: var(--gap);
    width: 100%;
    li {
      width: 100%;
    }
    a {
      display: block;
      width: 100%;
      text-align: center;
      border: solid 1px;
      border-radius: 5px;
      transition: all 0.25s ease;

      &:hover {
        background: var(--col-light);
        color: var(--col-header);
        text-decoration: none;
      }
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

const MenuButton = styled.button`
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
      opacity: ${({ open }) => (open ? "0" : ".7")};
      transform: ${({ open }) => (open ? "translateX(10px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const StyledNav = styled(UtilityFlex)`
  margin-left: auto;
  font-size: var(--f-s-500);
  @media (max-width: 50em) {
    z-index: -1;
    background: var(--col-header);
    position: fixed;
    inset: var(--headerHeight) 100% 0 -80%;
    display: flex;
    flex-direction: column-reverse;
    font-size: var(--f-s-900);
    padding: var(--gap);

    transform: translateX(${(props) => (props.open ? "100%" : "0")});
    &:focus-within {
      transform: translateX(100%);
    }
    transition: transform 0.5s ease-in-out;
  }
`;
const Overlay = styled.div`
  display: none;
  @media (max-width: 50em) {
    display: block;
    z-index: -2;
    position: fixed;
    inset: 0;
    background: var(--col-img-cover);
    opacity: ${(props) => (props.open ? ".7" : "0")};
    transform: translateX(${(props) => (props.open ? "0" : "-100%")});
    transition: transform 1ms ease-in-out, opacity 0.5s ease;
  }
`;
