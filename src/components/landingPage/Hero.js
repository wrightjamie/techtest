import * as React from "react";
import Link from "../utils/link";
import styled from "styled-components";
import { flow } from "../utils/utility";
import Icon from "../utils/icon";

const Hero = ({ data }) => {
  return (
    <>
      <HeroContainer>
        {data.title && <h3>{data.title}</h3>}
        {data.em && <em>{data.em}</em>}
        <p>{data.content}</p>
        {console.log(data.links)}
        <Cta>
          {data.links.map((link) => (
            <StyledLink href={link.link.url}>
              <Icon icon={link.link.icon} />
              <span>{link.link.content}</span>
            </StyledLink>
          ))}
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
    color: var(--col-v-light);
    font-size: var(--f-s-700);
    font-weight: var(--f-w-500);
  }
`;

const Cta = styled.div`
  display: flex;
  gap: var(--gap);
  justify-content: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: calc(var(--gap) / 2) var(--gap);

  border-radius: 5px;
  border: 1px solid;
  border-color: var(--col-img-cover);

  background-color: var(--col-img-cover);

  cursor: pointer;

  color: var(--col-light);

  font-size: var(--fs, var(--f-s-400));
  line-height: var(--f-lh-heading);

  &:hover,
  &:focus-within {
    text-decoration: underline;
    color: var(--col-v-light);
  }
  &:first-child {
    color: var(--col-light);
    background-color: var(--bg-col, var(--red));
    font-weight: var(--f-w-600);
    font-size: var(--fs, var(--f-s-500));
    font-variant: small-caps;

    &:hover,
    &:focus-within {
      background-color: var(--bg-col, var(--col-text));
    }
  }

  svg {
    margin-inline-end: 1rem;
  }
`;
