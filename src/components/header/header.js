import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Roundel from "../../svg/rafroundel.svg";

import {
  UtilityContainer,
  UtilityFlex,
  UtilityNavList,
} from "../utils/utility";

const Header = ({ data }) => {
  const links = data.header.frontmatter.links;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <H1Link siteTitle={siteTitle}></H1Link>
        <Nav links={links}></Nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const H1Link = ({ siteTitle }) => (
  <StyledLink as={Link} to="/">
    <StyledRoundel />
    <h1>{siteTitle}</h1>
  </StyledLink>
);

const Nav = ({ links }) => (
  <StyledNav as="nav">
    <NavItems>
      {links.map((link) => (
        <li key={link.link.id}>
          <a href={link.link.url}>{link.link.content}</a>
        </li>
      ))}
    </NavItems>
    <MenuButton>==</MenuButton>
  </StyledNav>
);

const NavItems = ({ children }) => (
  <UtilityNavList as="ul">{children}</UtilityNavList>
);

const StyledRoundel = styled(Roundel)`
  height: 2em;
`;
const StyledLink = styled(UtilityFlex)``;
const HeaderWrapper = styled(UtilityFlex)``;

const MenuButton = styled.button``;

const HeaderContainer = styled(UtilityContainer)`
  inset: 0 0 auto 0;
  position: fixed;
  height: 2rem;
  background-color: green;
`;

const StyledNav = styled(UtilityFlex)`
  margin-left: auto;
`;
