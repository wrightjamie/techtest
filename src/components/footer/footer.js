import React from "react";
import styled from "styled-components";

import { UtilityContainer, flow, UtilityFlex } from "../utils/utility";

import { SocialItems } from "../utils/social_items";
import Logo from "../../svg/rafacBlockLogo.svg";

const Footer = ({ data }) => (
  <FooterStop>
    <FooterGrid>
      {data.footer.frontmatter.columns.map((column) => (
        <li key={column.id}>
          <FooterHeader>{column.column_title}</FooterHeader>
          <FooterItems>
            {column.links.map((link) => (
              <FooterItem key={link.link.id}>
                <a href={link.link.url}>{link.link.content}</a>
              </FooterItem>
            ))}
          </FooterItems>
        </li>
      ))}
      <LogoColumn>
        <Logo />
      </LogoColumn>
    </FooterGrid>
    <SocialItems />
    <UtilityFlex jc>
      <FooterCopyright>
        ©2022 2459 Poulton-le-Fylde Squadron RAFAC. UK Crown Copyright
      </FooterCopyright>
    </UtilityFlex>
  </FooterStop>
);

export default Footer;

const FooterHeader = styled.h4`
  font-size: var(--f-s-500);
  font-weight: var(--f-w-500);
  padding-block-end: var(--half-gap);
`;
const FooterStop = styled(UtilityContainer)`
  scroll-snap-align: end;
  background-color: var(--col-header);
  color: var(--col-light);

  --social-fs: var(--f-s-600);

  > * {
    margin: var(--gap);
  }
  > * + * {
    margin-top: 0;
  }
`;

const FooterGrid = styled.ul`
  display: grid;
  gap: var(--gap);
  grid-template: "a b c logo logo";
  @media (max-width: 40em) {
    grid-template:
      "a b c"
      "logo logo logo";
  }

  list-style: none;
`;
const LogoColumn = styled.li`
  font-size: 6rem;
  grid-area: logo;
  justify-self: end;
`;

const FooterItems = styled.ul`
  list-style-position: inside;
`;

const FooterItem = styled.li`
  &::marker {
    content: "≫";
    color: var(--col-accent);
    margin-right: var(--gap);
  }
  & > a {
    padding-inline: var(--half-gap);
  }
`;
const FooterCopyright = styled.span`
  font-size: var(--f-s-300);
`;
