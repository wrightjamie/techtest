import React from "react";
import styled from "styled-components";

import useMenu from "../../hooks/useMenu";
import Link from "../utils/link";

import { H1Link } from "./header_h1";
import { MenuButton } from "./menu_button";

import {
  UtilityContainer,
  UtilityFlex,
  UtilityNavList,
} from "../utils/utility";
import { SocialItems } from "../utils/social_items";

const Header = ({ data }) => {
  const [isMenuOpen, node, setToggle] = useMenu();

  const links = data.header.frontmatter.links;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <HeaderContainer open={isMenuOpen}>
      <HeaderWrapper ref={node}>
        <H1Link siteTitle={siteTitle}></H1Link>
        <StyledNav as="nav" open={isMenuOpen} data-menuopen={isMenuOpen}>
          <SocialItems />
          <NavItems>
            {links.map((link) => (
              <li key={link.link.id}>
                <Link to={link.link.url}>{link.link.content}</Link>
              </li>
            ))}
          </NavItems>
        </StyledNav>
        <MenuButton open={isMenuOpen} onClickCallback={setToggle} />
      </HeaderWrapper>
      <Overlay open={isMenuOpen} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderWrapper = styled(UtilityFlex)`
  padding-inline: var(--gap);
`;

const HeaderContainer = styled(UtilityContainer)`
  --roundel-size: 4rem;

  grid-row: ${({ open }) => (open ? "1/2" : "2/3")};
  grid-column: 1/-1;
  inset: 0 0 auto 0;
  position: sticky;
  z-index: 10;

  height: var(--headerHeight);
  background-color: var(--col-header);
  box-shadow: 0px 3px 5px 3px rgba(0, 0, 0, 0.2);

  color: var(--col-light);

  &:focus-within {
    grid-row: 1/2;
  }
`;

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
