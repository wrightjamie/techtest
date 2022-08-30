import React from "react";
import Link from "../utils/link";
import styled from "styled-components";

import Roundel from "../../svg/rafroundel.svg";
import {
  UtilityContainer,
  UtilityFlex,
  UtilityNavList,
} from "../utils/utility";

export const H1Link = ({ siteTitle }) => (
  <StyledLink as={Link} to="/">
    <StyledRoundel />
    <H1>{siteTitle}</H1>
  </StyledLink>
);

const H1 = styled.h1`
  margin-left: calc(var(--roundel-size) + var(--gap));
  font-variant: small-caps;
`;

const StyledRoundel = styled(Roundel)`
  height: var(--roundel-size);
  position: absolute;
  top: var(--half-gap);
`;

const StyledLink = styled(UtilityFlex)``;
