import React from "react";
import styled from "styled-components";

import Facebook from "../../svg/facebook.svg";
import Twitter from "../../svg/twitter.svg";
import Phone from "../../svg/phone.svg";
import Mail from "../../svg/mail.svg";

import { UtilityNavList } from "./utility";

export const SocialItems = () => {
  return (
    <>
      <UtilityNavList>
        <li>
          <StyledLink href="facebook.com" circle>
            <Facebook />
          </StyledLink>
        </li>

        <li>
          <StyledLink href="twitter.com">
            <Twitter />
          </StyledLink>
        </li>
        <li>
          <StyledLink href="phone.com">
            <Phone />
          </StyledLink>
        </li>
        <li>
          <StyledLink href="contact.com">
            <Mail />
          </StyledLink>
        </li>
      </UtilityNavList>
    </>
  );
};

const StyledLink = styled.a`
  --fg: var(--col-fg, var(--col-light));
  --ac: var(--col-ac, var(--col-header));

  display: flex;
  aspect-ratio: 1/1;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: var(--col-light);
  &:hover {
    background: var(--fg);
    border-color: var(--ac);
    color: var(--ac);
    border-radius: 1000vh;
  }
`;
