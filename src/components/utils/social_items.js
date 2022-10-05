import React from "react";
import styled from "styled-components";

import { useSocialData } from "../../hooks/useSocialData";

import Link from "./link";
import Icon from "./icon";

import { UtilityNavList } from "./utility";

export const SocialItems = () => {
  const socials = useSocialData();

  return (
    <>
      <UtilityNavList jc>
        {socials.map((social, index) => (
          <li key={index}>
            <StyledLink href={social.link.url}>
              <Icon icon={social.link.icon} />
            </StyledLink>
          </li>
        ))}
      </UtilityNavList>
    </>
  );
};

const StyledLink = styled(Link)`
  --fg: var(--col-fg, var(--col-light));
  --ac: var(--col-ac, var(--col-header));

  font-size: var(--social-fs, inherit);

  display: flex;
  aspect-ratio: 1/1;
  align-items: center;
  justify-content: center;
  padding: 0.25em;
  border-radius: 1000vh;
  color: var(--col-light);
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  &:hover,
  &:focus {
    background-color: var(--fg);
    border-color: var(--ac);
    color: var(--ac);
  }
`;
