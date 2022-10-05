import React from "react";
import Link from "../utils/link";
import styled from "styled-components";

import Roundel from "../../svg/rafroundel.svg";
import { UtilityFlex } from "../utils/utility";
import { useSiteMetaData } from "../../hooks/useSiteMetaData";

export const H1Link = () => {
  const { title } = useSiteMetaData();
  return (
    <StyledLink as={Link} to="/">
      <StyledRoundel />
      <H1>{title}</H1>
    </StyledLink>
  );
};

const H1 = styled.h1`
  margin-left: calc(
    clamp(2rem, -3.1429rem + 22.8571vw, 4rem) + var(--half-gap)
  );
  font-variant: small-caps;
  font-size: clamp(1.5rem, -3rem + 20vw, 2rem);
`;

const StyledRoundel = styled(Roundel)`
  height: clamp(2rem, -3.1429rem + 22.8571vw, 4rem);
  position: absolute;
  top: var(--half-gap);
`;

const StyledLink = styled(UtilityFlex)``;
