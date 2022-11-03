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

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: calc(var(--gap) / 2) var(--gap);

  border-radius: 5px;

  background-color: var(--col-img-cover);

  cursor: pointer;

  color: var(--col-light);

  font-size: var(--fs, var(--f-s-500));
  line-height: var(--f-lh-heading);

  &:hover,
  &:focus-within {
  }
  &:first-child {
    background-color: var(--bg-col, var(--red));
    font-weight: var(--f-w-600);

    font-variant: small-caps;

    &:hover,
    &:focus-within {
      background-color: var(--bg-col, var(--col-text));
      box-shadow: 0 0 10px 3px var(--red);
    }
  }
  &:last-child {
    &:hover,
    &:focus-within {
      box-shadow: 0 0 10px 3px var(--col-img-cover);
      font-size: var(--f-s-400);
    }
  }

  svg {
    margin-inline-end: 1rem;
  }
`;
