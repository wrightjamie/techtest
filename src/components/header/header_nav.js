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
      <StyledNav as="nav" menuShow={isMenuOpen}>
        <SocialItems />
        <NavItems>
          {links.map((link) => (
            <li key={link.link.id}>
              <a href={link.link.url}>{link.link.content}</a>
            </li>
          ))}
        </NavItems>
      </StyledNav>
      <Overlay menuShow={isMenuOpen} />
      <MenuButton onClick={onClick}>==</MenuButton>
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

const MenuButton = styled.button`
  display: none;
  margin-left: auto;
  @media (max-width: 50em) {
    display: block;
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

    transform: translateX(${(props) => (props.menuShow ? "100%" : "0")});
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
    opacity: ${(props) => (props.menuShow ? ".7" : "0")};
    transform: translateX(${(props) => (props.menuShow ? "0" : "-100%")});
    transition: transform 1ms ease-in-out, opacity 0.5s ease;
  }
`;
