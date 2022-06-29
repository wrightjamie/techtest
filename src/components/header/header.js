import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Roundel from "../../svg/rafroundel.svg";

import { Container } from "../utils/container";

const Header = ({ data }) => (
  <HeaderContainer>
    <HeaderWrapper>
      <Link to="/">
        <StyledRoundel />
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <ul>
        {data.header.frontmatter.links.map((link) => (
          <li key={link.link.id}>
            <a href={link.link.url}>{link.link.content}</a>
          </li>
        ))}
      </ul>
      <MenuButton>==</MenuButton>
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;

const StyledRoundel = styled(Roundel)`
  width: 4em;
`;

const MenuButton = styled.button``;

const HeaderContainer = styled(Container)`
  position: fixed;
  height: 2rem;
  background-color: green;
`;

const HeaderWrapper = styled.header`
  display: flex;
`;
