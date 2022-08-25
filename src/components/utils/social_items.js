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
          <StyledLink href="facebook.com">
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
  border: solid red 1px;
  border-radius: 1000vh;
  display: flex;
  aspect-ratio: 1/1;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;
