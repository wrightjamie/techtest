import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import NavItems from "../utils/utility";
import Facebook from "../../svg/facebook.svg";
import Twitter from "../../svg/twitter.svg";
import Phone from "../../svg/phone.svg";
import Mail from "../../svg/mail.svg";

const SocialLinks = () => (
  <>
    <NavItems>
      <SocialItem>
        <a href="facebook.com">
          <Facebook />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="twitter.com">
          <Twitter />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="phone.com">
          <Phone />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="contact.com">
          <Mail />
        </a>
      </SocialItem>
    </NavItems>
  </>
);

const SocialItem = styled.li`
  font-size: var(--f-s-600);
  color: var(--col-light);

  a:hover,
  a:focus {
    color: var(--red);
  }
`;
