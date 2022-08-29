import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { H1Link } from "./header_h1";
import Nav from "./header_nav";

import {
  UtilityContainer,
  UtilityFlex,
  UtilityNavList,
} from "../utils/utility";
import { SocialItems } from "../utils/social_items";

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

const HeaderWrapper = styled(UtilityFlex)`
  padding-inline: var(--gap);
`;

const HeaderContainer = styled(UtilityContainer)`
  --roundel-size: 4rem;

  grid-row: 2/3;
  grid-column: 1/-1;
  inset: 0 0 auto 0;
  position: sticky;
  z-index: 10;

  height: var(--headerHeight);
  background-color: var(--col-header);
  box-shadow: 0px 3px 5px 3px rgba(0, 0, 0, 0.2);

  color: var(--col-light);

  &:focus-within,
  &:where([data-menuopen="true"]) {
    grid-row: 1/2;
  }
`;
