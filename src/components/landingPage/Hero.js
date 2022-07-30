import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { flow } from "../utils/utility";

const Hero = ({ data }) => {
  return (
    <>
      <HeroContainer>
        <h3>Ready?</h3>
        <p>{data.content}</p>
        <Cta>
          <CtaButton to={data.cta1.to}>{data.cta1.title}</CtaButton>
          <Link to={data.cta2.to}>{data.cta2.title}</Link>
        </Cta>
      </HeroContainer>
    </>
  );
};

export default Hero;

const HeroContainer = styled.div`
  grid-area: content;
  align-self: center;
  background-color: var(--col-img-cover);
  color: var(--col-light);
  padding: var(--gap);
  ${flow}
  h3 {
    color: var(--white);
    font-size: var(--f-s-700);
    font-weight: var(--f-w-500);
  }
`;

const Cta = styled.div`
  display: flex;
  gap: var(--gap);
  justify-content: center;
`;

const CtaButton = styled(Link)`
  background-color: var(--bg-col, var(--red));
  border-radius: 5px;
  color: var(--col-light);
  cursor: pointer;
  font-size: var(--fs, var(--f-s-500));
  font-variant: small-caps;
  font-weight: var(--f-w-600);
  line-height: var(--f-lh-heading);
  padding: calc(var(--gap) / 2) var(--gap);
  &:hover {
    text-decoration: underline;
    color: var(--white);
    background-color: var(--bg-col-hover, var(--blue));
  }
`;
